import { DivBlock, LinkBlock, ImageBlock, TextBlock, SectionBlock } from "./classes.js"

const headingFirstService = new TextBlock(
	"h5",
	"headers-text-color",
	"&#10022; Layout Design Development"
).toHtml()

const paragraphFirstService = new TextBlock(
	"p",
	"body-text-color",
	"I'll design an exquisite website based on your existing ready-made layout, with a focus on styles"
).toHtml()

const firstServiceBlock = new DivBlock(
	"first-service border-right",
	headingFirstService + paragraphFirstService,
	"layout"
).toHtml()

const headingSecondService = new TextBlock(
	"h5",
	"headers-text-color",
	"&#10022; Frontend Development"
).toHtml()

const paragraphSecondService = new TextBlock(
	"p",
	"body-text-color",
	"I'll create a fully responsive & unique website that focuses on JavaScript development"
).toHtml()

const secondServiceBlock = new DivBlock(
	"second-service",
	headingSecondService + paragraphSecondService,
	"frontend"
).toHtml()

const servicesWrapper = new DivBlock(
	"proposed-services",
	firstServiceBlock + secondServiceBlock,
	undefined
).toHtml()

const githubButtonText = new TextBlock(
	"p",
	undefined,
	"View GitHub"
).toHtml()

const arrowIcon = new ImageBlock(
	"./images/icons/arrow.svg",
	"Arrow Icon",
	"arrow",
	35,
).toHtml()

const githubLinkButton = new LinkBlock(
	"https://github.com/Pipchenkovaa",
	"connection headers-text-color button-link-decor",
	githubButtonText + arrowIcon
).toHtml()

const buttonContactWrapper = new DivBlock(
	"intrest-form-content__register",
	githubLinkButton,
	undefined
).toHtml()

const spanInterestBlock = new TextBlock(
	"span",
	"intrest-form-content__highlighting headers-text-color",
	"Interested?"
).toHtml()

const headingContsctCard = new TextBlock(
	"h1",
	"headers-text-color",
	`Did You Become ${spanInterestBlock}`
).toHtml()

const interestCardWrapper = new DivBlock(
	"card intrest-form-content card-decor",
	headingContsctCard + servicesWrapper + buttonContactWrapper,
	undefined
).toHtml()

export const scopesSection = new SectionBlock(
	"services",
	interestCardWrapper
).toHtml()