const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    // Toggle between light and dark mode classes
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Save the current mode to localStorage
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', currentMode);
});

// Apply the saved theme from localStorage on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        // Default to light mode if no theme is saved
        document.body.classList.add('light-mode');
    }
});
