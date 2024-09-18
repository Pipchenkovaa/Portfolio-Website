import { createBlockElement, createDivElement, createLinkElement, createImageElement } from "./functions.js"

const headingFirstService = createBlockElement(
	"h5",
	"headers-text-color"
)
headingFirstService.innerHTML = "&#10022;  Layout Design Development"

const paragraphFirstService = createBlockElement(
	"p",
	"body-text-color",
	null,
	"I'll design an exquisite website based on your existing ready-made layout, with a focus on styles"
)

const firstServiceBlock = createDivElement(
	"first-service border-right",
	"layout",
	headingFirstService,
	paragraphFirstService
)

const headingSecondService = createBlockElement(
	"h5",
	"headers-text-color"
)
headingSecondService.innerHTML = "&#10022;  Frontend Development"

const paragraphSecondService = createBlockElement(
	"p",
	"body-text-color",
	null,
	"I'll create a fully responsive & unique website that focuses on JavaScript development"
)

const secondServiceBlock = createDivElement(
	"second-service",
	"frontend",
	headingSecondService,
	paragraphSecondService
)

const servicesWrapper = createDivElement(
	"proposed-services",
	null,
	firstServiceBlock,
	secondServiceBlock
)
Object.assign(
	servicesWrapper.style, {
		display: "flex",
		justifyContent: "space-between",
	}
)

const githubButtonText = createBlockElement(
	"p",
	null,
	null,
	"View GitHub"
)

const arrowIcon = createImageElement(
	"./images/icons/arrow.svg",
	"Arrow Icon",
	"arrow",
	35
)

const githubLinkButton = createLinkElement(
	"https://github.com/Pipchenkovaa",
	"connection headers-text-color button-link-decor",
	githubButtonText,
	arrowIcon
)
if (githubLinkButton.classList.contains("connection")) {
	Object.assign(
		githubLinkButton.style, {
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}
	)
}

const buttonContactWrapper = createDivElement(
	"intrest-form-content__register",
	null,
	githubLinkButton
)
buttonContactWrapper.style.display = "flex"

const spanInterestBlock = createBlockElement(
	"span",
	"intrest-form-content__highlighting headers-text-color",
	null,
	"Interested?"
)

const headingContsctCard = createBlockElement(
	"h1",
	"headers-text-color",
	null,
	"Got ",
	spanInterestBlock
)

const interestCardWrapper = createDivElement(
	"card intrest-form-content card-decor",
	null,
	headingContsctCard,
	servicesWrapper,
	buttonContactWrapper
)

export const scopesSection = createBlockElement(
	"section",
	"services",
	null,
	interestCardWrapper
)
Object.assign(
	scopesSection.style, {
		display: "grid",
		justifyItems: "center",
	}
)