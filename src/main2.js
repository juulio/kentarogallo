import './scss/styles.scss'
import logo from '/logo.png'
import { initNavigation } from './navigation.js'
import { initRouter } from './router.js'

// Initialize the navigation module
document.addEventListener('DOMContentLoaded', () => {
  initNavigation()
  initRouter('app')
})

document.querySelector('#app').innerHTML = `
  <div class="wrapper-max-width">
    <header></header>
  </div>
`
