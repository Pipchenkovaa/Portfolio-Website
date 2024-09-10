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

const buttonContactWrapper = createDivElement(
	"intrest-form-content__register",
	null,
	githubLinkButton
)

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
	"Did You Become ",
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