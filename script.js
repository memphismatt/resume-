(function () {
  // year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Copy LinkedIn
  const btnCopy = document.getElementById("copy-linkedin");
  const linkedInUrl = "https://linkedin.com/in/matthew-malone-82b09099";
  if (btnCopy) {
    btnCopy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(linkedInUrl);
        btnCopy.textContent = "✅";
        setTimeout(() => (btnCopy.textContent = "🔗"), 1100);
      } catch {
        window.prompt("Copy this LinkedIn URL:", linkedInUrl);
      }
    });
  }

  // Theme switcher
  const root = document.documentElement;
  const chips = Array.from(document.querySelectorAll(".chip"));

  function setTheme(name) {
    root.setAttribute("data-theme", name);
    localStorage.setItem("theme", name);
    chips.forEach((c) => c.setAttribute("aria-pressed", c.dataset.setTheme === name ? "true" : "false"));
  }

  // load saved theme
  const saved = localStorage.getItem("theme");
  if (saved) setTheme(saved);

  chips.forEach((chip) => {
    chip.addEventListener("click", () => setTheme(chip.dataset.setTheme));
  });
})();
