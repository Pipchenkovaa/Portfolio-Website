import { headerSection } from "./blocks/header.js"
import { tickerSection } from "./blocks/tickerLogos.js"

const mainContainer = document.createElement('div')
mainContainer.className = 'container'
mainContainer.id = 'app'
document.body.append(mainContainer)

mainContainer.insertAdjacentHTML('beforeend', headerSection)
mainContainer.insertAdjacentHTML('beforeend', tickerSection)