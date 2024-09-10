import { headerSection } from "./blocks/introductionCard.js"
import { tickerSection } from "./blocks/techStackCard.js"
import { projectCardSection } from "./blocks/projectExamplesCard.js"
import { scopesSection } from "./blocks/scopesCard.js"
import { contactsSection } from "./blocks/contactsCard.js"
import { rightsSection } from "./blocks/rightsCard.js"

const sections = [
	headerSection.outerHTML,
	tickerSection.outerHTML,
	projectCardSection.outerHTML,
	scopesSection,
	contactsSection,
	rightsSection
]

const mainContainer = document.createElement("div")
mainContainer.className = "container"
mainContainer.id = "app"
document.body.append(mainContainer)

sections.forEach(
	section => mainContainer.insertAdjacentHTML("beforeend", section)
)