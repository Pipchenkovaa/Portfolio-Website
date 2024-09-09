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
		href: "https://pipchenkovaa.github.io/Authorization-Form/",
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

const projectsSectionTitle = document.createElement("h4")
projectsSectionTitle.className = "body-text-color"
projectsSectionTitle.textContent = "Some examples of my work"

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

				if (tech.hiddenClass) {
					usedTechItem.classList.add("hidden-one")
				}

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