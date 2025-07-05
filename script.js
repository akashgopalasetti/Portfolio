function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbarList = document.querySelector(".navbar ul");
  const toggleBtn = document.getElementById("theme-toggle");

  // Apply stored theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "🌙 Light Mode";
  } else {
    document.body.classList.remove("light-mode");
    toggleBtn.textContent = "☀️ Dark Mode";
  }

  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      navbarList.classList.toggle("active");
    });
  }

  // Theme toggle
  toggleBtn.addEventListener("click", function () {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.remove("light-mode");
      toggleBtn.textContent = "☀️ Dark Mode";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      toggleBtn.textContent = "🌙 Light Mode";
      localStorage.setItem("theme", "light");
    }
  });
});
