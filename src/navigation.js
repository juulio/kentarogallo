import { navigate } from './router.js'

const navItems = [
  { name: 'Manifesto', link: '/manifesto' },
  { name: 'About', link: '/about' },
  { name: 'The Name', link: '/thename' },
  { name: 'The Roadtrip', link: '/theroadtrip' },
  { name: 'Artists', link: '/artists' },
]

export function initNavigation() {
  // const container = document.getElementById(containerId)
  const container = document.getElementsByTagName('header')[0]
  if (!container) return

  // Build the HTML string
  const navHTML = `
    <nav>

      <ul class="links">
        <li>
          <a href="/" class="nav-logo" data-link>
            <img src="/logo.png" alt="Home">
          </a>
        </li>
        ${navItems.map((item) => `<li><a href="${item.link}" data-link>${item.name}</a></li>`).join('')}
      </ul>
    </nav>
    `

  container.innerHTML = navHTML

  container.addEventListener('click', (e) => {
    // Check if the clicked element (or its parent) is a link with 'data-link'
    const link = e.target.closest('a[data-link]')

    if (link) {
      // Prevent the browser from performing a full page reload
      e.preventDefault()

      // Get the destination path (e.g., /about)
      const path = link.getAttribute('href')

      // Tell our router to change the URL and update the page content
      navigate(path)
    }
  })
}
