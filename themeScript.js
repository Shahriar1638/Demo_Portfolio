document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light'); // Save preference
        }
    }

    // Check for saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme); // Apply the saved theme
    } else {
        // If no theme is saved, default to light theme (or whatever you prefer)
        setTheme('light');
    }

    // Event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
});