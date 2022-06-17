/**
 * Start Variables
 */

//  Get the header of the page which contains the logo and menu icon of the page
let pageHeader = document.querySelector("#header");
// Get Burger icon from HTML document
let burgerIcon = document.querySelector(".icon");
// Get the menu list of links
let menuList = document.querySelector("#myMenu");
// Get the close button of the menu
let closeBtn = document.querySelector(".close-menu-btn");
// Get the show-more button from Portfolio section
let showBtn = document.querySelector("#show-btn");
// Get the second part of Portfolio section
let portfolioContent2 = document.querySelector("#port-content-2");

/**
 * End Variables
 */

/**
 * Start Events
 */

// Add the click-event to the Burger icon
burgerIcon.addEventListener("click", function () {
  // Display the menu list
  menuList.setAttribute('style', 'width: 35%');
});

// Add the click-event to the close button of the menu
closeBtn.addEventListener("click", function () {
  // Close the menu list
  menuList.setAttribute('style', 'width: 0%');
});

// Add the click-event to the show-more button in Portfolio section
showBtn.addEventListener("click", function () {
  /**
   * Display/Hide the 2nd part of portfolio contents, when pressing the show-more button
   */
  if (portfolioContent2.classList.contains("hide-element")) {
    // Display the contents
    portfolioContent2.classList.remove("hide-element");
    portfolioContent2.classList.add("portfolio-content");
    // Change Button Text
    showBtn.innerHTML = "Show Me Less";
  } else {
    // Hide the contents
    portfolioContent2.classList.remove("portfolio-content");
    portfolioContent2.classList.add("hide-element");
    // Change Button Text
    showBtn.innerHTML = "Show Me More";
  }
});

// Display/Hide the header of the page according to the scroll direction
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let currentTop = this.window.scrollY || document.documentElement.scrollTop;
  if (currentTop > lastScrollTop) {
    // Hide the header of the page (Scroll Down)
    pageHeader.removeAttribute("style", "position: sticky");
  } else {
    // Display the header of the page (Scroll Up)
    pageHeader.setAttribute("style", "position: sticky");
  }
  lastScrollTop = currentTop;
});

/**
 * End Events
 */