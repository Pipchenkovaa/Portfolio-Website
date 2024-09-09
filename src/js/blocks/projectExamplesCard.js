import { DivBlock, LinkBlock, ImageBlock, TextBlock, SectionBlock } from "./classes.js"

const projectWrapper = document.createElement("div")
projectWrapper.className = "project-card card-decor"

const projectsResources = [
	{
		projectName: "Fantasy Authorization Form",
		href: "https://pipchenkovaa.github.io/Authorization-Form/",
		projectImageSrc: "./images/login-form.png",
		projectImageAlt: "Fantasy Auth Form",
		imageCardClass: "project-example dark-card",
		projectDescription: "The stunning design of the two-page authorization form is suitable for both new & registered users",
		usedTechnologies: [
			{imageIcon: "./images/icons/scss.svg", imageAlt: "SCSS Logo"},
			{imageIcon: "./images/icons/html.svg", imageAlt: "HTML Logo"},
			{imageIcon: "./images/icons/css.svg", imageAlt: "CSS Logo"},
			{imageIcon: "./images/icons/js.svg", imageAlt: "JS Logo"},
			{imageIcon: "./images/icons/git.svg", imageAlt: "GIT Logo"},
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
			{imageIcon: "./images/icons/scss.svg", imageAlt: "SCSS Logo"},
			{imageIcon: "./images/icons/html.svg", imageAlt: "HTML Logo"},
			{imageIcon: "./images/icons/css.svg", imageAlt: "CSS Logo"},
			{imageIcon: "./images/icons/js.svg", imageAlt: "JS Logo"},
			{imageIcon: "./images/icons/photoshop.svg", imageAlt: "Photoshop Logo"},
		]
	},
	{
		projectName: "Apple / Mac Website",
		href: "https://pipchenkovaa.github.io/Authorization-Form/",
		projectImageSrc: "./images/apple-site.png",
		projectImageAlt: "Apple Mac Website",
		imageCardClass: "project-example light-card",
		projectDescription: "An updated, multi-page website that is inspired by the iconic style of Apple Inc. The first major project of it's kind",
		usedTechnologies: [
			{imageIcon: "./images/icons/html.svg", imageAlt: "HTML Logo"},
			{imageIcon: "./images/icons/css.svg", imageAlt: "CSS Logo"},
			{imageIcon: "./images/icons/js.svg", imageAlt: "JS Logo"},
			{imageIcon: "./images/icons/photoshop.svg", imageAlt: "Photoshop Logo"},
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
			{imageIcon: "./images/icons/tailwind.svg", imageAlt: "Tailwindcss Logo"},
			{imageIcon: "./images/icons/html.svg", imageAlt: "HTML Logo"},
			{imageIcon: "./images/icons/css.svg", imageAlt: "CSS Logo"},
			{imageIcon: "./images/icons/js.svg", imageAlt: "JS Logo"},
		]
	}
]

const projectsSectionTitle = new TextBlock(
	"h4",
	"body-text-color",
	"Some examples of my work"
).toHtml()

export const projectCardSection = document.createElement("section")
projectCardSection.className = "pet-projects"
projectCardSection.append(projectsSectionTitle)

projectsResources.forEach(
	elem => {
		const projectImg = document.createElement("img")
		projectImg.src = elem.projectImageSrc
		projectImg.alt = elem.projectImageAlt
		projectImg.className = elem.imageCardClass
		projectImg.width = 800

		const projectImageLink = document.createElement("a")
		projectImageLink.href = elem.href
		projectImageLink.append(projectImg)

		const projectImageWrapper = document.createElement("div")
		projectImageWrapper.className = "image-cover"
		projectImageWrapper.append(projectImageLink)

		const projectTitle = document.createElement("h5")
		projectTitle.className = "project-name headers-text-color headers-link"
		projectTitle.textContent = elem.projectName
		
		const projectTitleLink = document.createElement("a")
		projectTitleLink.href = elem.href
		projectTitleLink.append(projectTitle)
		
		const projectDescriptionCover = document.createElement("div")
		projectDescriptionCover.className = "project-descrtiption_cover"
		projectDescriptionCover.append(projectTitleLink)

		const projectText = document.createElement("p")
		projectText.className = "add-project-info body-text-color"
		projectText.textContent = elem.projectDescription
		
		const techStackList = document.createElement("ul")
		techStackList.className = "used-technologies__list"

		elem.usedTechnologies.forEach(
			tech => {
				const usedTechItem = document.createElement("li")
				usedTechItem.className = "used-technologies__list__wrapper border-common"

				const techIcon = document.createElement("img")
				techIcon.src = tech.imageIcon
				techIcon.alt = tech.imageAlt
				techIcon.width = 30

				usedTechItem.append(techIcon)
				techStackList.append(usedTechItem)
			}
		)

		const techStackListWrapper = document.createElement("div")
		techStackListWrapper.className = "used-technologies hidden-mobile-small"
		techStackListWrapper.append(techStackList)

		const projectDescriptionWrapper = document.createElement("div")
		projectDescriptionWrapper.className = "project-description"
		projectDescriptionWrapper.append(projectDescriptionCover, projectText, techStackListWrapper)

		const projectCardWrapper = document.createElement("div")
		projectCardWrapper.className = "project-card card-decor"
		projectCardWrapper.append(projectImageWrapper, projectDescriptionWrapper)

		projectCardSection.append(projectCardWrapper)
})

// const projectsSectionTitle = new TextBlock(
// 	"h4",
// 	"body-text-color",
// 	"Some examples of my work"
// ).toHtml()

// export const projectCardSection = new SectionBlock(
// 	"pet-projects",
// 	projectsSectionTitle + projectCardWrapper.outerHTML
// ).toHtml()