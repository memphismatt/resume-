// Copy LinkedIn URL
const copyBtn = document.getElementById("copy-linkedin");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const url = "https://linkedin.com/in/matthew-malone-82b09099";
    try {
      await navigator.clipboard.writeText(url);
      copyBtn.textContent = "✅";
      setTimeout(() => (copyBtn.textContent = "🔗"), 1200);
    } catch (e) {
      alert("Could not copy. Here it is:\n" + url);
    }
  });
}

// Theme switching via dropdown
const themeSelect = document.getElementById("themeSelect");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

if (themeSelect) {
  const saved = localStorage.getItem("theme") || "executive-blue";
  themeSelect.value = saved;
  applyTheme(saved);

  themeSelect.addEventListener("change", (e) => {
    applyTheme(e.target.value);
  });
}
