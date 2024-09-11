import { createBlockElement, createDivElement, createLinkElement, createImageElement } from "./functions.js"

const headerCard = [
	{
		githubLink: "https://github.com/Pipchenkovaa",
		githubIcon: "./images/icons/github.svg",
		githubIconAlt: "Github Icon",
		telegramLink: "https://t.me/@pip_ch",
		telegramIcon: "./images/icons/telegram-icon.svg",
		telegramIconAlt: "Telegram Icon",
		emailLink: "mailto:pipchenkova0701@gmail.com",
		emailIcon: "./images/icons/email.svg",
		emailIconAlt: "Email Icon",
		avatarImage: "./images/avatar.png",
		avatarImageAlt: "Alina's avatar",
		heading: "Hi there! My name's Alina and, above all else, I love ",
		text: "I'm currently studying at the HSE University, and my goal is to become a frontend developer and create modern, efficient web interfaces"
	}
]

export const headerSection = createBlockElement("section", "introduction")

headerCard.forEach(
	elem => {
		const GithubIcon = createImageElement(
			elem.githubIcon,
			elem.githubIconAlt,
			"github-contact",
			30
		)
		const GithubButtonText = createBlockElement(
			"p",
			null,
			null,
			"View GitHub"
		)
		const GithubAccountLink = createLinkElement(
			elem.githubLink,
			"welcome-info__socials connection headers-text-color button-link-decor",
			GithubIcon,
			GithubButtonText
		)
		const telegramIconHeader = createImageElement(
			elem.telegramIcon,
			elem.telegramIconAlt,
			"telegram-contact social-link button-link-decor",
			46
		)
		const telegramLinkHeader = createLinkElement(
			elem.telegramLink,
			"welcome-info__socials",
			telegramIconHeader
		)
		const emailIconHeader = createImageElement(
			elem.emailIcon,
			elem.emailIconAlt,
			"social-link button-link-decor",
			46
		)
		const emailLinkHeader = createLinkElement(
			elem.emailLink,
			"welcome-info__socials",
			emailIconHeader
		)
		const linksDivWrapper = createDivElement(
			"welcome-info__socials",
			null,
			GithubAccountLink,
			telegramLinkHeader,
			emailLinkHeader
		)
		const descriptionAdditionalText = createBlockElement(
			"p",
			"welcome-info__additional-text body-text-color",
			null,
			elem.text
		)
		const spanProgrammingBlock = createBlockElement(
			"span",
			"welcome-info__main-text__highlighting headers-text-color",
			null,
			"programming"
		)
		const descriptionMainText = createBlockElement(
			"h1",
			"welcome-info__main-text headers-text-color",
			null,
			elem.heading,
			spanProgrammingBlock
		)
		const informationCard = createDivElement(
			"card welcome-info card-decor",
			null,
			linksDivWrapper,
			descriptionMainText,
			descriptionAdditionalText
		)
		const avatsrImg = createImageElement(
			elem.avatarImage,
			elem.avatarImageAlt,
			"avatar__image"
		)
		const avatarCard = createDivElement(
			"card avatar background-gradient border-common",
			null,
			avatsrImg
		)
		headerSection.append(informationCard, avatarCard)
	}
)