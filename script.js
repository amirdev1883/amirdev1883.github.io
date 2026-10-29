(() => {
  'use strict';

  const themeButton = document.getElementById('themeToggle');
  const root = document.documentElement;

  const updateThemeLabel = () => {
    const label = root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    themeButton?.setAttribute('aria-label', label);
    themeButton?.setAttribute('title', label);
  };
  updateThemeLabel();

  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('amir-theme', next); } catch (_) { /* Storage may be blocked. */ }
    updateThemeLabel();
  });

  const menuButton = document.getElementById('menuToggle');
  const navigation = document.getElementById('primaryNav');
  const closeMenu = () => {
    navigation?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
  };
  menuButton?.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
  navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', (event) => {
    if (navigation?.classList.contains('is-open') && !navigation.contains(event.target) && !menuButton?.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 821px)').addEventListener('change', (e) => { if (e.matches) closeMenu(); });

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const projectCards = [...document.querySelectorAll('[data-category]')];
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.filter;
      filterButtons.forEach((other) => {
        const selected = other === button;
        other.classList.toggle('active', selected);
        other.setAttribute('aria-pressed', String(selected));
      });
      projectCards.forEach((card) => { card.hidden = value !== 'all' && card.dataset.category !== value; });
    });
  });

  const progress = document.getElementById('scrollProgress');
  let scrollPending = false;
  const updateProgress = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? Math.max(0, Math.min(1, window.scrollY / distance)) : 0})`;
    scrollPending = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollPending) { window.requestAnimationFrame(updateProgress); scrollPending = true; }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
    const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const visible = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
      let selectedId = '';
      let ratio = 0;
      visible.forEach((v, id) => { if (v > ratio) { ratio = v; selectedId = id; } });
      links.forEach((a) => {
        const active = a.getAttribute('href') === `#${selectedId}`;
        a.classList.toggle('is-active', active);
        if (active) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
  }

  document.getElementById('year').textContent = String(new Date().getFullYear());
  const emailButton = document.getElementById('copyEmail');
  emailButton?.addEventListener('click', async () => {
    const original = emailButton.innerHTML;
    try {
      await navigator.clipboard.writeText(emailButton.dataset.email);
      emailButton.textContent = 'Email copied ✓';
    } catch (_) {
      emailButton.textContent = 'Copy unavailable — use the email link';
    }
    window.setTimeout(() => { emailButton.innerHTML = original; }, 2500);
  });
})();
