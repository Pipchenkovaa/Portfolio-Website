import { DivBlock, LinkBlock, ImageBlock, TextBlock, SectionBlock } from "./readyBlocks.js"

//GitHub button with link
const GithubIcon = new ImageBlock(
	"./images/icons/github.svg",
	"Github Icon",
	"github-contact",
	"30px"
).toHtml()

const GithubButtonText = new TextBlock(
	"p",
	undefined,
	"View GitHub"
).toHtml()

const GithubAccountLink = new LinkBlock(
	"https://github.com/Pipchenkovaa",
	"welcome-info__socials connection headers-text-color button-link-decor",
	GithubIcon + GithubButtonText
).toHtml()

//Telegram button with link
const tgIconHeader = new ImageBlock(
	"./images/icons/telegram-icon.svg",
	"Telegram Icon",
	"telegram-contact social-link button-link-decor",
	"46px"
).toHtml()

const tgLinkHeader = new LinkBlock(
	"https://t.me/@pip_ch",
	"welcome-info__socials",
	tgIconHeader
).toHtml()

//Email button with link
const mailIconHeader = new ImageBlock(
	"./images/icons/email.svg",
	"Email Icon",
	"social-link button-link-decor",
	"46px"
).toHtml()

const mailLinkHeader = new LinkBlock(
	"mailto:pipchenkova0701@gmail.com",
	"welcome-info__socials",
	mailIconHeader
).toHtml()

//Wrapper for contart buttons & links
const linksDivWrapper = new DivBlock(
	"welcome-info__socials",
	GithubAccountLink + tgLinkHeader + mailLinkHeader,
	undefined
).toHtml()

//Just paragraph
const descriptionAdditionalText = new TextBlock(
	"p",
	"welcome-info__additional-text body-text-color",
	"I'm currently studying at the HSE University, and my goal is to become a frontend developer and create modern, efficient web interfaces"
).toHtml()

const spanProgrammingBlock = new TextBlock(
	"span",
	"welcome-info__main-text__highlighting headers-text-color",
	"programming"
).toHtml()

//Main itroduction text
const descriptionMainText = new TextBlock(
	"h1",
	"welcome-info__main-text headers-text-color",
	`Hi there! My name's Alina and, above all else, I love ${spanProgrammingBlock}`
).toHtml()

//Full card with itroduction information
const informationCard = new DivBlock(
	"card welcome-info card-decor",
	linksDivWrapper + descriptionMainText + descriptionAdditionalText,
	undefined
).toHtml()

//Avatar card
const avatsrImg = new ImageBlock(
	"./images/avatar.png",
	"Alina's avatar",
	"avatar__image",
	undefined
).toHtml()

const avatarCard = new DivBlock(
	"card avatar background-gradient border-common",
	avatsrImg
).toHtml()

//Full header block with avatar card & texts & contacts
export const headerSection = new SectionBlock(
	"introduction",
	informationCard + avatarCard
).toHtml()
