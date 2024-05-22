// Function to load the navbar content
function loadNavbarContent() {
  const navBar = document.querySelector('.navbar')
  const navContent = `<div class="nav-center">
        <div class="nav-header">
          <div class="logo-web-page">
            <a href="../../index.html">
              <img
                src="../../imagenes/logo caminos de exito.png"
                alt="logo caminos de exito"
                class="main-logo-img img"
              />
            </a>
            <a href="../../index.html">
              <h4>caminos de exito</h4>
            </a>
          </div>
          <button type="button" class="toggle-btn" id="toggle-btn">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <!-- navigation buttons -->
        <ul class="navigation-btns" id="navigation-btns">
          <li><a href="../../index.html">inicio</a></li>
          <li><a href="#">blog</a></li>
          <li class="topic-container-2">
            <!-- al topic-container se le agregó
            el evento -->
            <div class="topic-container">
              <a href="#" id="collapsable-link">temas</a>
              <button class="navbar-btn" id="navbar-btn">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <!-- a esta ul se afecta con el evento de topic container -->
            <ul class="topics-collapsable-links">
              <li>
                <a href="../../productividad/index.html">productividad</a>
              </li>
              <li><a href="../../dinero/index.html">dinero</a></li>
              <li><a href="../../disciplina/index.html">disciplina</a></li>
              <li>
                <a href="../../tecnicas-de-estudio/index.html"
                  >técnicas de estudio</a
                >
              </li>
            </ul>
          </li>
          <li><a href="../../notas-libros/index.html">notas</a></li>
          <li><a href="#">boletin</a></li>
          <li><a href="#">academia</a></li>
        </ul>
      </div>`
  navBar.innerHTML = navContent
}

// Function to initialize event listeners
function initializeNavEvents() {
  const toggleButton = document.getElementById('toggle-btn')
  const navbarBtn = document.getElementById('navbar-btn')
  const topicsCollapsable = document.querySelector('.topics-collapsable-links')
  const collapsableLink = document.querySelector('#collapsable-link')
  const navigationBtns = document.getElementById('navigation-btns')
  const topicContainer = document.querySelector('.topic-container')

  // Add click event listener to the toggle button
  toggleButton.addEventListener('click', function () {
    if (
      navigationBtns.classList.contains('show-nav') ||
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

  topicContainer.addEventListener('click', function () {
    topicsCollapsable.classList.toggle('show-list')
    navigationBtns.classList.toggle('show-nav-2')
    navigationBtns.classList.add('show-nav')
  })

  collapsableLink.addEventListener('click', function (e) {
    e.preventDefault()
  })
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  loadNavbarContent()
  initializeNavEvents()
})
