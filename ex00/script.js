
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-theme');
});