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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sections;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

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



// Add class 'active' to section when near top of viewport

const makeActive = () => {
    Array.prototype.forEach.call(sections, function(element) {
        const box = element.getBoundingClientRect();
        const navName = element.dataset.nav;
        const navItem = document.getElementById(`${navName}-nav`);
        let viewPortBottom = window.innerHeight || document.documentElement.clientHeight;
        // Adding 150 so that active doesn't flip until entire h1 in viewport
        if (box.top + 150 <= viewPortBottom && box.bottom + 150 >= viewPortBottom) {
            element.classList.add("active-section");
            navItem.classList.add("active-nav");
        } else {
            element.classList.remove("active-section");
            navItem.classList.remove("active-nav");
        }
    });
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.addEventListener('DOMContentLoaded', function () {
    sections = document.getElementsByTagName("section");
    buildNav();
    document.addEventListener("scroll", function() { 
        makeActive();
    });
});

// Scroll to section on link click

// Set sections as active


