import { headerSection } from "./blocks/introductionCard.js";
import { tickerSection } from "./blocks/techStackCard.js";


import { contactsSection } from "./blocks/contactsCard.js";
import { rightsSection } from "./blocks/rightsCard.js";

const mainContainer = document.createElement('div')
mainContainer.className = 'container'
mainContainer.id = 'app'
document.body.append(mainContainer)

mainContainer.insertAdjacentHTML('beforeend', headerSection)
mainContainer.insertAdjacentHTML('beforeend', tickerSection)


mainContainer.insertAdjacentHTML('beforeend', contactsSection)
mainContainer.insertAdjacentHTML('beforeend', rightsSection)