import { i18n } from '../utils.js'

export class BullseyeNGApplication extends Application {
  constructor(options = {}) {
    super(options)
  }

  static get defaultOptions() {
    const options = super.defaultOptions
    options.title = i18n('bullseyeng.title')
    options.id = "bullseyeng"
    options.template = 'modules/bullseye-ng/templates/bullseye-ng.hbs'
    options.popOut = true
    options.resizable = true
    options.left = 115
    options.top = 70
    options.width = 200
    options.height = 300
    return options
  }

  async getData() {
    const players = game.users.players.filter(p => p.active)
    let data = {
      players: players,
      empty: players.length === 0
    }
    return data
  }

  activateListeners(html) {
    const targets = $(html).find('.target')
    targets.on('click', event => {
      const targetTokenId = event.currentTarget.dataset.tokenId
      const token = canvas.tokens.get(targetTokenId)
      token.control({releaseOthers: true})
    })
  }
}
