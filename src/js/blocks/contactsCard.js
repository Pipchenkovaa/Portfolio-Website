import { createBlockElement, createDivElement, createLinkElement, createImageElement } from "./functions.js"

const socialMediaIcons = [
	{
		href: "https://t.me/@pip_ch",
		src: "./images/icons/telegram-icon.svg",
		alt: "Telegram Icon"
	},
	{
		href: "https://wa.me/79169259277",
		src: "./images/icons/whatsapp.svg",
		alt: "WhatsApp Icon"
	},
	{
		href: "tel:+79169259277",
		src: "./images/icons/phone.svg",
		alt: "Phone Icon"
	},
	{
		href: "mailto:pipchenkova0701@gmail.com",
		src: "./images/icons/email.svg",
		alt: "Email Icon"
	},
]

const iconsWrapper = createDivElement(
	"connection-icons"
)

socialMediaIcons.forEach(
	elem => {
		const iconImage = createImageElement(
			elem.src,
			elem.alt,
			"icon__space button-link-decor",
			45
		)
		const link = createLinkElement(
			elem.href,
			null,
			iconImage
		)
		const iconDiv = createDivElement(
			"icon",
			null,
			link
		)
		iconsWrapper.append(iconDiv)
	}
)

const connectionConditions = createBlockElement(
	"p",
	"body-text-color"
)
connectionConditions.innerHTML = "Available Hours: 9:00 AM – 9:00 PM <br> (Moscow Time)"

const spanContactConditions = createBlockElement(
	"span",
	"stay-connected__highlighting headers-text-color",
	null,
	"Connected"
)

const connectionHeader = createBlockElement(
	"h1",
	"headers-text-color",
	null,
	"Stay ",
	spanContactConditions
)

const connectionMainWrapper = createDivElement(
	"stay-connected",
	null,
	connectionHeader,
	connectionConditions,
	iconsWrapper
)

export const contactsSection = createBlockElement(
	"section",
	"footer",
	null,
	connectionMainWrapper
)