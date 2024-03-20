// Create a variable for the button
var toggleButton = document.getElementById("toggle-btn");

// Create a variable for the element to toggle the class on
var navigationBtns = document.getElementById("navigation-btns");

// Add click event listener to the button
toggleButton.addEventListener("click", function () {
  // Use the myElement variable to toggle the class
  navigationBtns.classList.toggle("show-nav");
});
