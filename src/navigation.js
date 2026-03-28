const navItems = [
  { name: 'Manifesto', link: '#second' },
  { name: 'About', link: '#third' },
  { name: 'The Name', link: '#fourth' },
  { name: 'The Roadtrip', link: '#fourth' },
  { name: 'Artists', link: '#fourth' },
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
          <a href="/" class="nav-logo">
            <img src="/logo.png" alt="Home">
          </a>
        </li>
        ${navItems.map((item) => `<li><a href="${item.link}">${item.name}</a></li>`).join('')}
      </ul>
    </nav>
    `

  container.innerHTML = navHTML
}
