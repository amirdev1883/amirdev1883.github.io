(() => {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const lightThemeColor = themeColor?.content;
  let preference = null;
  let themeToggle;

  function applyTheme() {
    const theme = preference ?? (systemTheme.matches ? 'dark' : 'light');
    const dark = theme === 'dark';
    root.dataset.theme = theme;
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(dark));
      themeToggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }
    if (themeColor) {
      themeColor.content = dark ? '#182638' : lightThemeColor;
    }
  }

  function syncTheme() {
    try {
      const saved = window.localStorage.getItem(storageKey);
      preference = saved === 'dark' || saved === 'light' ? saved : null;
    } catch {
      // Keep the current page's choice when storage is unavailable.
    }
    applyTheme();
  }

  // Load the theme in the head so it is applied before the page paints.
  syncTheme();
  systemTheme.addEventListener?.('change', applyTheme);
  window.addEventListener('storage', (event) => {
    if (event.key === storageKey || event.key === null) syncTheme();
  });
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) syncTheme();
  });

  document.addEventListener('DOMContentLoaded', () => {
    themeToggle = document.querySelector('[data-theme-toggle]');
    if (themeToggle) {
      applyTheme();
      themeToggle.addEventListener('click', () => {
        preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme();
        try {
          window.localStorage.setItem(storageKey, preference);
        } catch {
          // The toggle still works on this page.
        }
      });
      themeToggle.hidden = false;
    }

    // Keep the mobile menu usable if the Bootstrap bundle fails to load.
    const navToggle = document.querySelector('.navbar-toggler');
    const menu = document.getElementById('navbarSupportedContent');
    if (!navToggle || !menu) return;

    navToggle.addEventListener('click', () => {
      if (window.bootstrap?.Collapse) return;
      const expanded = menu.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', String(expanded));
    });
  });
})();
