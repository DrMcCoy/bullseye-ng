import { BullseyeNGApplication } from './app/bullseye-ng.js'
import { i18n } from './utils.js'

let bullseyeNGApp;

const renderApp = () => {
  if(bullseyeNGApp) {
    bullseyeNGApp.render()
  }
}

Hooks.once('ready', () => {
  bullseyeNGApp = new BullseyeNGApplication();

  AnvilMenu.registerMenuEntry({
    name: i18n('bullseyeng.open'),
    icon: '<i class="fas fa-bullseyeng"></i>',
    condition: () => game.user.isGM,
    callback: () => bullseyeNGApp.render(true)
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
