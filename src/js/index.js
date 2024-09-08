import { headerSection } from "./blocks/header.js"

const mainContainer = document.createElement('div')
mainContainer.className = 'container'
mainContainer.id = 'app'
document.body.append(mainContainer)

mainContainer.insertAdjacentHTML('beforeend', headerSection)