document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');

  // The saved theme is applied in <head> before first paint; sync the icon to it
  if (root.classList.contains('dark-mode')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  // Toggle theme and save preference
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('dark-mode');
    const isDark = root.classList.contains('dark-mode');
    themeIcon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
    try {
      localStorage.setItem('theme', isDark ? 'dark-mode' : 'light-mode');
    } catch (e) { }
  });

  // Keep the footer copyright year current
  document.querySelectorAll('.footer-year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
