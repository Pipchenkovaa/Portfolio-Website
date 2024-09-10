import { createBlockElement, createDivElement, createLinkElement, createImageElement, createTechStackList } from "./functions.js"

const projectsResources = [
	{
		projectName: "Fantasy Authorization Form",
		href: "https://pipchenkovaa.github.io/Authorization-Form/",
		projectImageSrc: "./images/login-form.png",
		projectImageAlt: "Fantasy Auth Form",
		imageCardClass: "project-example dark-card",
		projectDescription: "The stunning design of the two-page authorization form is suitable for both new & registered users",
		usedTechnologies: [
			{
				imageIcon: "./images/icons/scss.svg",
				imageAlt: "SCSS Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/html.svg",
				imageAlt: "HTML Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/css.svg",
				imageAlt: "CSS Logo",
				hiddenClass: true
			},
			{
				imageIcon: "./images/icons/js.svg",
				imageAlt: "JS Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/git.svg",
				imageAlt: "GIT Logo",
				hiddenClass: false
			},
		]
	},
	{
		projectName: "Website With A Parallax Effect",
		href: "https://pipchenkovaa.github.io/Website-With-A-Parallax-Effect/",
		projectImageSrc: "./images/3d-forest.png",
		projectImageAlt: "3D Forest",
		imageCardClass: "project-example dark-card",
		projectDescription: "A simple website with a parallax effect, created primarily using JavaScript & Adobe Photoshop",
		usedTechnologies: [
			{
				imageIcon: "./images/icons/scss.svg",
				imageAlt: "SCSS Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/html.svg",
				imageAlt: "HTML Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/css.svg",
				imageAlt: "CSS Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/js.svg",
				imageAlt: "JS Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/photoshop.svg",
				imageAlt: "Photoshop Logo",
				hiddenClass: true
			},
		]
	},
	{
		projectName: "Apple / Mac Website",
		href: "https://pipchenkovaa.github.io/Apple_Mac-Website/",
		projectImageSrc: "./images/apple-site.png",
		projectImageAlt: "Apple Mac Website",
		imageCardClass: "project-example light-card",
		projectDescription: "An updated, multi-page website that is inspired by the iconic style of Apple Inc. The first major project of it's kind",
		usedTechnologies: [
			{
				imageIcon: "./images/icons/html.svg",
				imageAlt: "HTML Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/css.svg",
				imageAlt: "CSS Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/js.svg",
				imageAlt: "JS Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/photoshop.svg",
				imageAlt: "Photoshop Logo",
				hiddenClass: false
			},
		]
	},
	{
		projectName: "Minimalistic News Website",
		href: "https://pipchenkovaa.github.io/News-Website/",
		projectImageSrc: "./images/tailwind.png",
		projectImageAlt: "News Website",
		imageCardClass: "project-example light-card",
		projectDescription: "A minimalist fashion news website, where I first used the Tailwind CSS framework",
		usedTechnologies: [
			{
				imageIcon: "./images/icons/tailwind.svg",
				imageAlt: "Tailwindcss Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/html.svg",
				imageAlt: "HTML Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/css.svg",
				imageAlt: "CSS Logo",
				hiddenClass: false
			},
			{
				imageIcon: "./images/icons/js.svg",
				imageAlt: "JS Logo",
				hiddenClass: false
			},
		]
	}
]

const projectsSectionTitle = createBlockElement(
	"h4",
	"body-text-color",
	null,
	"Some examples of my work"
)

export const projectCardSection = createBlockElement(
	"section",
	"pet-projects",
)
projectCardSection.append(projectsSectionTitle)

projectsResources.forEach(
	elem => {
		const projectImg = createImageElement(
			elem.projectImageSrc,
			elem.projectImageAlt,
			elem.imageCardClass,
			800
		)
		const projectImageLink = createLinkElement(
			elem.href,
			null,
			projectImg
		)
		const projectImageWrapper = createDivElement(
			"image-cover",
			null, 
			projectImageLink
		)
		const projectTitle = createBlockElement(
			"h5", 
			"project-name headers-text-color headers-link",
			null,
			elem.projectName
		)
		const projectTitleLink = createLinkElement(
			elem.href,
			null,
			projectTitle
		)
		const projectDescriptionCover = createDivElement(
			"project-descrtiption_cover",
			null,
			projectTitleLink
		)
		const projectText = createBlockElement(
			"p",
			"add-project-info body-text-color",
			null,
			elem.projectDescription
		)
		const techStackListWrapper = createDivElement(
			"used-technologies hidden-mobile-small",
			null,
			createTechStackList(elem.usedTechnologies)
		)
		const projectDescriptionWrapper = createDivElement(
			"project-description",
			null,
			projectDescriptionCover,
			projectText,
			techStackListWrapper
		)
		const projectWrapper = createDivElement(
			"project-card card-decor",
			null,
			projectImageWrapper,
			projectDescriptionWrapper
		)
		projectCardSection.append(projectWrapper)
	}
)
