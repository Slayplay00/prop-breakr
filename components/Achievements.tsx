
import React, { useState, useEffect, useRef } from 'react';
import { CurrencyDollarIcon } from './icons/CurrencyDollarIcon';
import { UsersIcon } from './icons/UsersIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const achievements = [
  {
    icon: <UsersIcon className="w-8 h-8" />,
    target: 1200,
    label: 'Clients Funded',
    suffix: '+',
    prefix: '',
    format: (n: number) => Math.round(n).toLocaleString(),
  },
  {
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
    target: 50,
    label: 'In Funding Secured',
    suffix: 'M+',
    prefix: '$',
    format: (n: number) => n.toFixed(0),
  },
  {
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
    target: 74.5,
    label: 'In Client Payouts',
    suffix: 'M+',
    prefix: '$',
    format: (n: number) => n.toFixed(1),
  },
  {
    icon: <BriefcaseIcon className="w-8 h-8" />,
    target: 350,
    label: 'Active Accounts Managed',
    suffix: '+',
    prefix: '',
    format: (n: number) => Math.round(n).toLocaleString(),
  },
];

const AchievementCounter: React.FC<{
  target: number;
  duration?: number;
  suffix: string;
  prefix: string;
  format: (n: number) => string;
  isVisible: boolean;
}> = ({ target, duration = 2000, suffix, prefix, format, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure it ends on the exact target
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, isVisible]);

  return (
    <span className="text-4xl md:text-5xl font-black text-white">
      {prefix}{format(count)}{suffix}
    </span>
  );
};

const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-20 bg-brand-gray/40 backdrop-blur-lg border-y border-white/5">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-brand-primary mb-3">{item.icon}</div>
              <AchievementCounter
                target={item.target}
                suffix={item.suffix}
                prefix={item.prefix}
                format={item.format}
                isVisible={isVisible}
              />
              <p className="text-brand-text-light mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;