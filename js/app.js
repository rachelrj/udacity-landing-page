/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections;
let nav;
let hamburger;

/**
 * End Global Variables
 * 
*/


/**
 * Begin Main Functions
 * 
*/

// Builds the navigation dynamically from the sections
// Iterates on the array of sections to create list items
// Adds list items to navigation unordered list.
const buildNav = () => {
    const navUl = document.getElementById("navbar__list");
    const navLiArr = [];
    Array.prototype.forEach.call(sections, function(element, index) {
        const navName = element.dataset.nav;
        const navLi = document.createElement("li");
        navLi.classList.add("menu__link");
        navLi.setAttribute("id", `${navName}-nav`);
        navLi.innerText = navName;
        if(index === 0){
            navLi.classList.add("active-nav");
        }
        navLiArr.push(navLi);
    });
    navUl.append(...navLiArr);
}


// Iterates through sections and checks which section is near top of viewport
// Sets that section's class to "active-class" and sets the appropriate
// nav list item's class to "active-nav"
// removes those classes if a section is no longer in the viewport
const makeActive = () => {
    Array.prototype.forEach.call(sections, function(element) {
        const box = element.getBoundingClientRect();
        const navName = element.dataset.nav;
        const navItem = document.getElementById(`${navName}-nav`);
        let viewPortBottom = window.innerHeight || document.documentElement.clientHeight;
        // Adding 200 so that active doesn't flip until entire h1 in viewport
        if (box.top + 200 <= viewPortBottom && box.bottom + 200 >= viewPortBottom) {
            element.classList.add("active-section");
            navItem.classList.add("active-nav");
        } else {
            element.classList.remove("active-section");
            navItem.classList.remove("active-nav");
        }
    });
}


// If the user clicks on the navbar, if that click aligns with a 
// navbar list item, then finds the appropriate section and scrolls
// that section into view.
const scrollIntoView = (event) => {
    let navName = event.target.id;
    if(navName === "navbar__list") {
        return;
    }
    navName = navName.split("-")[0];
    const element = document.getElementById(navName);
    element.scrollIntoView({
        behavior: 'smooth'
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Builds the nav and adds all the event listeners
// After the document is ready.
// Assumes that this javascript file could be included
// in either the head or at the bottom of the html file
document.addEventListener('DOMContentLoaded', function () {
    sections = document.getElementsByTagName("section");
    nav = document.getElementById("navbar__list");
    hamburger = document.getElementById("hamburger-lines")
    buildNav();
    document.addEventListener("scroll", makeActive);
    nav.addEventListener("click", scrollIntoView);
    hamburger.addEventListener("click", (event) => {
        event.preventDefault();
        hamburger.classList.toggle("close");
        nav.classList.toggle("open");
    })
});

