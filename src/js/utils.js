import { headerSection } from "./blocks/introductionCard.js"
import { tickerSection } from "./blocks/techStackCard.js"
import { projectCardSection } from "./blocks/projectExamplesCard.js"
import { scopesSection } from "./blocks/scopesCard.js"
import { contactsSection } from "./blocks/contactsCard.js"
import { rightsSection } from "./blocks/rightsCard.js"

export const sections = [
	headerSection.outerHTML,
	tickerSection.outerHTML,
	projectCardSection.outerHTML,
	scopesSection.outerHTML,
	contactsSection.outerHTML,
	rightsSection.outerHTML
]