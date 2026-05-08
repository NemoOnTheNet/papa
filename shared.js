// shared.js — nav scrolled state + reveal animations
(function(){
  const nav = document.getElementById('nav');
  // Only the home page's dark fullscreen hero gets the white-text "over-hero" treatment.
  // Subpage .page-hero blocks are on light ivoire and need the normal scrolled nav.
  const hero = document.querySelector('.hero');
  function syncNav(){
    if (!nav) return;
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 24);
    if (hero){
      const heroBottom = hero.offsetTop + hero.offsetHeight - 80;
      nav.classList.toggle('over-hero', y < heroBottom);
    } else {
      nav.classList.remove('over-hero');
    }
  }
  syncNav();
  window.addEventListener('scroll', syncNav, { passive: true });
  window.addEventListener('resize', syncNav);

  const io = new IntersectionObserver((entries) => {
    for (const e of entries){
      if (e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
})();
