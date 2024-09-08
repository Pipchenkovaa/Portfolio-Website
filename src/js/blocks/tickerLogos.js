import { TextBlock, SectionBlock } from "./readyBlocks.js"

const tickerHeading = new TextBlock(
	"h4",
	"body-text-color",
	"My technology stack"
).toHtml()

const steckWrapper = document.createElement('div')
steckWrapper.className = 'technology-stack__scrolling-wrapper marquee marquee--7'

const steckLogosList = [
	{src:"./images/icons/html.svg", alt:"HTML Logo"},
	{src:"./images/icons/css.svg", alt:"CSS Logo"},
	{src:"./images/icons/tailwind.svg", alt:"Tailwindcss Logo"},
	{src:"./images/icons/js.svg", alt:"JavaScript Logo"},
	{src:"./images/icons/git.svg", alt:"Git Logo"},
	{src:"./images/icons/scss.svg", alt:"SCSS Logo"},
	{src:"./images/icons/webpack.svg", alt:"Webpack Logo"},
]

steckLogosList.forEach(currentElem => {
	const image = document.createElement('img')
	image.src = currentElem.src
	image.alt = currentElem.alt
	image.className = "marquee__item stack-logo"
	steckWrapper.append(image)
})

export const tickerSection = new SectionBlock(
	"technology-stack",
	tickerHeading + steckWrapper.outerHTML
).toHtml()