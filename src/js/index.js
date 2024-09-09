import { headerSection } from "./blocks/introductionCard.js";
import { tickerSection } from "./blocks/techStackCard.js";
import { projectCardSection } from "./blocks/projectExamplesCard.js"
import { scopesSection } from "./blocks/scopesCard.js"
import { contactsSection } from "./blocks/contactsCard.js";
import { rightsSection } from "./blocks/rightsCard.js";

const mainContainer = document.createElement('div')
mainContainer.className = 'container'
mainContainer.id = 'app'
document.body.append(mainContainer)

mainContainer.insertAdjacentHTML('beforeend', headerSection)
mainContainer.insertAdjacentHTML('beforeend', tickerSection)
mainContainer.insertAdjacentHTML('beforeend', projectCardSection.outerHTML)
mainContainer.insertAdjacentHTML('beforeend', scopesSection)
mainContainer.insertAdjacentHTML('beforeend', contactsSection)
mainContainer.insertAdjacentHTML('beforeend', rightsSection)