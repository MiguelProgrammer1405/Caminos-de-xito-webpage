// Create a variable for the button
var toggleButton = document.getElementById('toggle-btn')
var navbarBtn = document.getElementById('navbar-btn')
var topicsCollapsable = document.querySelector('.topics-collapsable-links')

// Create a variable for the element to toggle the class on
var navigationBtns = document.getElementById('navigation-btns')

// Add click event listener to the button
toggleButton.addEventListener('click', function () {
  // Use the myElement variable to toggle the class
  if (
    navigationBtns.classList.contains('show-nav') &&
    navigationBtns.classList.contains('show-nav-2')
  ) {
    navigationBtns.classList.remove('show-nav')
    navigationBtns.classList.remove('show-nav-2')
    topicsCollapsable.classList.remove('show-list')
  } else {
    navigationBtns.classList.toggle('show-nav')
  }
})

window.addEventListener('scroll', function () {
  if (navigationBtns) {
    if (window.scrollY >= 100) {
      navigationBtns.classList.remove('show-nav')
      navigationBtns.classList.remove('show-nav-2')
      topicsCollapsable.classList.remove('show-list')
    }
  }
})

navbarBtn.addEventListener('click', function () {
  topicsCollapsable.classList.toggle('show-list')
  navigationBtns.classList.toggle('show-nav-2')
})
