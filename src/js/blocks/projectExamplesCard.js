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
			{imageIcon: "./images/icons/scss.svg", imageAlt: "SCSS Logo", hiddenClass: false},
			{imageIcon: "./images/icons/html.svg", imageAlt: "HTML Logo", hiddenClass: false},
			{imageIcon: "./images/icons/css.svg", imageAlt: "CSS Logo", hiddenClass: true},
			{imageIcon: "./images/icons/js.svg", imageAlt: "JS Logo", hiddenClass: false},
			{imageIcon: "./images/icons/git.svg", imageAlt: "GIT Logo", hiddenClass: false},
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
			{imageIcon: "./images/icons/scss.svg", imageAlt: "SCSS Logo", hiddenClass: false},
			{imageIcon: "./images/icons/html.svg", imageAlt: "HTML Logo", hiddenClass: false},
			{imageIcon: "./images/icons/css.svg", imageAlt: "CSS Logo", hiddenClass: false},
			{imageIcon: "./images/icons/js.svg", imageAlt: "JS Logo", hiddenClass: false},
			{imageIcon: "./images/icons/photoshop.svg", imageAlt: "Photoshop Logo", hiddenClass: true},
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
			{imageIcon: "./images/icons/html.svg", imageAlt: "HTML Logo", hiddenClass: false},
			{imageIcon: "./images/icons/css.svg", imageAlt: "CSS Logo", hiddenClass: false},
			{imageIcon: "./images/icons/js.svg", imageAlt: "JS Logo", hiddenClass: false},
			{imageIcon: "./images/icons/photoshop.svg", imageAlt: "Photoshop Logo", hiddenClass: false},
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
			{imageIcon: "./images/icons/tailwind.svg", imageAlt: "Tailwindcss Logo", hiddenClass: false},
			{imageIcon: "./images/icons/html.svg", imageAlt: "HTML Logo", hiddenClass: false},
			{imageIcon: "./images/icons/css.svg", imageAlt: "CSS Logo", hiddenClass: false},
			{imageIcon: "./images/icons/js.svg", imageAlt: "JS Logo", hiddenClass: false},
		]
	}
]

const createTextElement = (tag, className, content) => {
	const elem = document.createElement(tag)
	if (className) {
		elem.className = className
	}
	if (content) {
		elem.textContent = content
	}
	return elem
}

const createImageElement = (src, alt, className, width) => {
	const elem = document.createElement("img")
	elem.src = src
	elem.alt = alt
	if (className) {
		elem.className = className
	}
	if (width) {
		elem.width = width
	}
	return elem
}

const createLinkElement = (href, className, content) => {
	const link = document.createElement("a")
	link.href = href
	if (className) {
		link.className = className
	}
	link.append(content)
	return link
}

const createDivElement = (className, id, ...content) => {
	const div = document.createElement("div")
	div.className = className
	if (id) {
		div.id = id
	}
	content.forEach(
		item => {
			div.append(item)
		}
	)
	return div
}

const createTechStackList = (usedTechnologies) => {
	const techList = document.createElement("ul")
	techList.className = "used-technologies__list"

	usedTechnologies.forEach(
		elem => {
			const techItem = document.createElement("li")
			techItem.className = "used-technologies__list__wrapper border-common"
			if (elem.hiddenClass) {
				techItem.classList.add("hidden-one")
			}
			const techImage = createImageElement(elem.imageIcon, elem.imageAlt, null, 30)
			techItem.append(techImage)
			techList.append(techItem)
		}
	)
	return techList
}

const projectsSectionTitle = createTextElement("h4", "body-text-color", "Some examples of my work")

export const projectCardSection = document.createElement("section")
projectCardSection.className = "pet-projects"
projectCardSection.append(projectsSectionTitle)

projectsResources.forEach(
	elem => {
		const projectImg = createImageElement(elem.projectImageSrc, elem.projectImageAlt, elem.imageCardClass, 800)

		const projectImageLink = createLinkElement(elem.href, null, projectImg)

		const projectImageWrapper = createDivElement("image-cover", null, projectImageLink)

		const projectTitle = createTextElement("h5", "project-name headers-text-color headers-link", elem.projectName)

		const projectTitleLink = createLinkElement(elem.href, null, projectTitle)

		const projectDescriptionCover = createDivElement("project-descrtiption_cover", null, projectTitleLink)

		const projectText = createTextElement("p", "add-project-info body-text-color", elem.projectDescription)

		const techStackListWrapper = createDivElement("used-technologies hidden-mobile-small", null, createTechStackList(elem.usedTechnologies))
		
		const projectDescriptionWrapper = createDivElement("project-description", null, projectDescriptionCover, projectText, techStackListWrapper)

		const projectCardWrapper = createDivElement("project-card card-decor", null, projectImageWrapper, projectDescriptionWrapper)

		projectCardSection.append(projectCardWrapper)
	}
)
