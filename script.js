const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const header = document.getElementById('header');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Switch the images
function toggleSwitchImages(mode) {
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

function toggleLightDarkMode(isDark) {
  header.style.backgroundColor = isDark
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255/ 50%)';
  textBox.style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Night Mode' : 'Light Mode';
  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark
    ? (toggleIcon.children[1].style.color = 'white')
    : (toggleIcon.children[1].style.color = 'yellow');
  isDark ? toggleSwitchImages('dark') : toggleSwitchImages('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleLightDarkMode(true);
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleLightDarkMode(false);
    localStorage.setItem('theme', 'light');
  }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleLightDarkMode(true);
  }
}
