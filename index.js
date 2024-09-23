import "./styles.css";
import { home } from "./home.js";
import { about } from "./about.js";
import { menu } from "./menu.js";

//Initial page content load
home();

const basePage = document.querySelector('#content');

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

//Delete current content
function clearPage(){ while (basePage.firstChild) {
    basePage.removeChild(basePage.firstChild);
  }
}

//Allow buttons to load correct content
homeButton.addEventListener('click', () => {
    //Delete current content
    clearPage();
    //Load content
    home();
});

//Allow buttons to load correct content
menuButton.addEventListener('click', () => {
    //Delete current content
    clearPage();
    //Load content
    menu();
});

//Allow buttons to load correct content
aboutButton.addEventListener('click', () => {
    //Delete current content
    clearPage();
    //Load content
    about();
});

console.log('This is my webpack restaurant!');