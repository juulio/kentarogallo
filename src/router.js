import { Home } from './pages/home.js'
import { Manifesto } from './pages/manifesto.js'
import { About } from './pages/about.js'
import { TheName } from './pages/thename.js'
import { TheRoadtrip } from './pages/theroadtrip.js'
import { Artists } from './pages/artists.js'

const routes = {
  '/': Home,
  '/about': About,
  '/manifesto': Manifesto,
  '/thename': TheName,
  '/theroadtrip': TheRoadtrip,
  '/artists': Artists,
  // Add more routes as needed
}

export function initRouter(containerId) {
  const container = document.getElementById(containerId)

  const render = () => {
    const path = window.location.pathname
    const page = routes[path] || (() => '<h1>404 Not Found</h1>')
    container.innerHTML = page()
  }

  // Listen for the "Back/Forward" browser buttons
  window.addEventListener('popstate', render)

  // Initial render
  render()
}

// Function to navigate without reloading
export function navigate(path) {
  window.history.pushState({}, '', path)
  // Manually trigger the popstate-like behavior
  const navEvent = new PopStateEvent('popstate')
  window.dispatchEvent(navEvent)
}
