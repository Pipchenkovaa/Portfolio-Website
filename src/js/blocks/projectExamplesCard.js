import { createBlockElement, createDivElement, createLinkElement, createImageElement, createTechStackList } from "./functions.js"
import { projectsResources } from "./petProjectsResources.js"


const projectsSectionTitle = createBlockElement(
	"h4",
	"body-text-color",
	null,
	"Some examples of my work"
)
Object.assign(
	projectsSectionTitle.style, {
		display: "flex",
		justifyContent: "center"
	}
)

export const projectCardSection = createBlockElement(
	"section",
	"pet-projects",
)
Object.assign(
	projectCardSection.style, {
		display: "grid",
		justifyContent: "center"
	}
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
		if (projectWrapper.classList.contains("project-card")) {
			Object.assign(
				projectWrapper.style, {
					// display: "flex",
					alignItems: "center",
				}
			)
		}
		projectCardSection.append(projectWrapper)
	}
)
