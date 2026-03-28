import './scss/styles.scss'
import logo from '/logo.png'
import { initNavigation } from './navigation.js'

// Initialize the navigation module
document.addEventListener('DOMContentLoaded', () => {
  initNavigation()
})

document.querySelector('#app').innerHTML = `
  <div id="wrapper">
    <header></header>
  </div>
`
