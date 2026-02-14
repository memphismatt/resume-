(() => {
  const THEME_KEY = "theme";
  const DEFAULT_THEME = "executive-blue";

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme switcher
  const select = document.getElementById("themeSelect");
  const root = document.documentElement;

  function applyTheme(themeName) {
    root.setAttribute("data-theme", themeName);
    localStorage.setItem(THEME_KEY, themeName);
    if (select) select.value = themeName;
  }

  const saved = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  applyTheme(saved);

  if (select) {
    select.addEventListener("change", () => {
      applyTheme(select.value);
    });
  }

  // Copy LinkedIn button
  const copyBtn = document.getElementById("copyLinkedIn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const url = "https://linkedin.com/in/matthew-malone-82b09099";
      try {
        await navigator.clipboard.writeText(url);
        copyBtn.textContent = "✅";
        setTimeout(() => (copyBtn.textContent = "🔗"), 900);
      } catch {
        // fallback
        window.prompt("Copy LinkedIn URL:", url);
      }
    });
  }

  // Active nav highlight (IntersectionObserver)
  const navLinks = Array.from(document.querySelectorAll(".mid-nav a"));
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach(a => {
      const isActive = a.getAttribute("href") === `#${id}`;
      a.classList.toggle("active", isActive);
    });
  };

  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible && visible.target && visible.target.id) {
        setActive(visible.target.id);
      }
    },
    { rootMargin: "-25% 0px -60% 0px", threshold: [0.15, 0.25, 0.35] }
  );

  sections.forEach(sec => navObserver.observe(sec));

  // Reveal cards on scroll
  const revealEls = document.querySelectorAll(".reveal");
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach(el => revealObs.observe(el));
})();
