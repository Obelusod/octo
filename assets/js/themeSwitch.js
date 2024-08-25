const themeToggler = document.getElementById('theme-toggler');
const lightModeIcon = document.getElementById('light-mode-icon');
const darkModeIcon = document.getElementById('dark-mode-icon');

jtd.getTheme = function() {
    const cssFileHref = (document.getElementById('jtdThemeCSS') || document.querySelector('[rel="stylesheet"]')).getAttribute('href');
    return cssFileHref.substring(cssFileHref.lastIndexOf('-') + 1, cssFileHref.length - 4);
}

jtd.setTheme = function(newTheme) {
    const cssFile = document.getElementById('jtdThemeCSS') || document.querySelector('[rel="stylesheet"]');
    const currentTheme = jtd.getTheme();

    if (newTheme === 'toggle') {
        newTheme = currentTheme === 'dark' ? 'default' : 'dark';
    }
    cssFile.setAttribute('href', cssFile.getAttribute('href').replace(currentTheme, newTheme));

    lightModeIcon.classList.toggle('hidden', newTheme === 'dark');
    darkModeIcon.classList.toggle('hidden', newTheme !== 'dark');

    localStorage.setItem('currentTheme', newTheme);
}

themeToggler.addEventListener('click', () => jtd.setTheme('toggle'));

if (localStorage.getItem('currentTheme') === 'dark') {
    jtd.setTheme('dark');
} else {
    jtd.setTheme('default');
}