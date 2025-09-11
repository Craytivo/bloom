// Load an HTML snippet into a div by ID
async function loadInclude(id, file) {
  const el = document.getElementById(id);
  if (!el) return console.error(`Element with id "${id}" not found`);

  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    el.innerHTML = await res.text();

    // Rebind mobile menu toggle if header
    if (file.includes("header")) {
      const btn = el.querySelector("#menu-btn");
      const menu = el.querySelector("#mobile-menu");
      if (btn && menu) {
        btn.addEventListener("click", () => menu.classList.toggle("hidden"));
      }
    }
  } catch (err) {
    console.error(`Failed to load ${file}:`, err);
  }
}

// Auto-load includes
document.addEventListener("DOMContentLoaded", () => {
  loadInclude("header", "header.html");
  loadInclude("footer", "footer.html");
});
