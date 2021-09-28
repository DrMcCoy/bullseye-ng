import { BullseyeApplication } from './app/bullseye.js'
import { i18n } from './utils.js'

let bullseyeApp;

const renderApp = () => {
  if(bullseyeApp) {
    bullseyeApp.render()
  }
}

Hooks.once('ready', () => {
  bullseyeApp = new BullseyeApplication();

  AnvilMenu.registerMenuEntry({
    name: i18n('bullseye.open'),
    icon: '<i class="fas fa-bullseye"></i>',
    condition: () => game.user.isGM,
    callback: () => bullseyeApp.render(true)
  })
})

Hooks.on('targetToken', (user, token, targeted) => {
  renderApp()
})

Hooks.on('controlToken', (token, controlled) => {
  renderApp()
})

Hooks.on('renderPlayerList', (app, html, data) => {
  renderApp()
})
