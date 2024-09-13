import { createBlockElement, createDivElement, createImageElement } from "./functions.js"

const steckLogosList = [
	{ src:"./images/icons/html.svg", alt:"HTML Logo" },
	{ src:"./images/icons/css.svg", alt:"CSS Logo" },
	{ src:"./images/icons/tailwind.svg", alt:"Tailwindcss Logo" },
	{ src:"./images/icons/js.svg", alt:"JavaScript Logo" },
	{ src:"./images/icons/git.svg", alt:"Git Logo" },
	{ src:"./images/icons/scss.svg", alt:"SCSS Logo" },
	{ src:"./images/icons/webpack.svg", alt:"Webpack Logo" },
	{ src:"./images/icons/gsap.svg", alt:"GSAP Logo" },
]

const tickerHeading = createBlockElement(
	"h4",
	"body-text-color",
	null,
	"My technology stack"
)

const steckWrapper = createDivElement(
	"technology-stack__scrolling-wrapper marquee marquee--8"
)

steckLogosList.forEach(
	elem => {
		const image = createImageElement(
			elem.src,
			elem.alt,
			"marquee__item stack-logo"
		)
		steckWrapper.append(image)
	}
)

export const tickerSection = createBlockElement(
	"section",
	"technology-stack",
	null,
	tickerHeading,
	steckWrapper
)