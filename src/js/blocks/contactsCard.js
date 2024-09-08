import { DivBlock, TextBlock, SectionBlock } from "./classes.js"

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

const iconsWrapper = document.createElement("div")
iconsWrapper.className = "connection-icons"

socialMediaIcons.forEach(elem => {
	const iconDiv = document.createElement("div")
	iconDiv.className = "icon"

	const link = document.createElement("a")
	link.href = elem.href

	const iconImage = document.createElement("img")
	iconImage.src = elem.src
	iconImage.alt = elem.alt
	iconImage.className = "icon__space button-link-decor"
	iconImage.width = 45

	link.append(iconImage)
	iconDiv.append(link)
	iconsWrapper.append(iconDiv)
})

const connectionConditions = new TextBlock(
	"p",
	"body-text-color",
	"Available Hours: 9:00 AM – 9:00 PM <br> (Moscow Time)"
).toHtml()

const spanContactConditions = new TextBlock(
	"span",
	"stay-connected__highlighting headers-text-color",
	"Connected"
).toHtml()

const connectionHeader = new TextBlock(
	"h1",
	"headers-text-color",
	`Stay ${spanContactConditions}`
).toHtml()

const connectionMainWrapper = new DivBlock(
	"stay-connected",
	connectionHeader + connectionConditions + iconsWrapper.outerHTML
).toHtml()

export const contactsSection = new SectionBlock(
	"footer",
	connectionMainWrapper
).toHtml()