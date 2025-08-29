(function(){
  document.addEventListener('mousemove', function(e) {
    document.body.style.setProperty('--mouse-x', e.clientX + 'px');
    document.body.style.setProperty('--mouse-y', e.clientY + 'px');
  });

  const observe = (el, once = true, cb) => {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cb(entry.target);
          if (once) io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
  };

  document.querySelectorAll('[data-animate-count]')?.forEach(el => {
    observe(el, true, (node) => {
      const target = parseFloat(node.getAttribute('data-target')||'0');
      const prefix = node.getAttribute('data-prefix')||'';
      const suffix = node.getAttribute('data-suffix')||'';
      const duration = 1200;
      const start = performance.now();
      const fmt = (n)=>Number.isInteger(target)?Math.round(n).toString():n.toFixed(1);
      const step = (t)=>{
        const p = Math.min(1, (t-start)/duration);
        const val = target * p;
        node.textContent = prefix + fmt(val) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  });

  document.querySelectorAll('[data-accordion]')?.forEach(root => {
    root.querySelectorAll('[data-accordion-button]')?.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('[data-accordion-item]');
        const panel = item.querySelector('[data-accordion-panel]');
        const open = item.getAttribute('data-open') === 'true';
        item.setAttribute('data-open', (!open).toString());
        panel.style.gridTemplateRows = open ? '0fr' : '1fr';
        panel.style.opacity = open ? '0' : '1';
      });
    });
  });
})();
