// Import CSS styles and modules
import './styles/index.css';
import scroll from './modules/scroll';
import { toggleTheme, addThemeClass } from './modules/toggleTheme';
import displayList from './modules/displayList';

// Select DOM elements for the hamburger button and theme toggle button
const btnHamburger = document.querySelector('.fa-bars');
const btnTheme = document.querySelector('.fa-moon');

// Add event listener to the hamburger button to display the navigation list on click
btnHamburger.addEventListener('click', displayList);

// Add event listener to the theme toggle button to switch themes on click
btnTheme.addEventListener('click', toggleTheme);

// Add event listener to the document to show/hide the scroll-up button on scroll
document.addEventListener('scroll', scroll.scrollUp);

// Retrieve stored theme classes from localStorage
const getBodyClass = localStorage.getItem('class-body-theme');
const getBtnClass = localStorage.getItem('class-btn-theme');

// Apply the retrieved theme classes to the body and button elements
addThemeClass(getBodyClass, getBtnClass);
