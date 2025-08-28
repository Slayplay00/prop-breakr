
import React, { useState } from 'react';
import type { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Which prop firms do you support?",
    answer: "We support all major prop firms, including FTMO, MyForexFunds, The Funded Trader, Topstep, and many more. If you're with a firm not listed, contact us and we'll likely be able to support you."
  },
  {
    question: "Is my account information safe with you?",
    answer: "Absolutely. We use industry-standard security protocols and encryption to protect your account credentials. Our traders only have access to trade; they cannot make withdrawals. Your privacy and security are our top priorities."
  },
  {
    question: "What happens if you fail my challenge?",
    answer: "While we have an extremely high success rate (over 98%), in the rare event that we fail a challenge, we offer a free retry on a new account provided by you. Our goal is to get you funded, and we stand by that promise."
  },
  {
    question: "How long does the passing process take?",
    answer: "The time frame depends on the specific rules of the prop firm and challenge (e.g., minimum trading days). Typically, we can complete challenges within 5 to 20 trading days."
  },
  {
    question: "What is the account management service?",
    answer: "Once you are funded, you can hire our professional traders to manage your account. We trade on your behalf and take a percentage of the profits we generate. It's a hands-free way to potentially grow your funded account."
  }
];

const AccordionItem: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-brand-light-gray">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-5 text-left"
    >
      <span className="text-lg font-medium text-white">{item.question}</span>
      <svg
        className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <div
      className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <p className="pb-5 pr-10 text-brand-text-light">{item.answer}</p>
      </div>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container">
        <div className="bg-brand-gray/40 backdrop-blur-lg blended-border rounded-xl p-8 md:p-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
              <p className="text-lg text-brand-text-light mt-4 max-w-2xl mx-auto">Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;