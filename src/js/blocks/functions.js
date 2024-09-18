export const createBlockElement = (tag, className, id, ...content) => {
	const elem = document.createElement(tag)
	if (className) {
		elem.className = className
	}
	if (id) {
		elem.id = id
	}
	if (content) {
		content.forEach(
			item => {
				elem.append(item)
			}
		)
	}
	return elem
}

export const createDivElement = (className, id, ...content) => {
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

export const createLinkElement = (href, className, ...content) => {
	const link = document.createElement("a")
	link.href = href
	if (className) {
		link.className = className
	}
	content.forEach(
		item => {
			link.append(item)
		}
	)
	return link
}

export const createImageElement = (src, alt, className, width) => {
	const image = document.createElement("img")
	image.src = src
	image.alt = alt
	if (className) {
		image.className = className
	}
	if (width) {
		image.width = width
	}
	return image
}

export const createTechStackList = (usedTechnologies) => {
	const techList = document.createElement("ul")
	techList.className = "used-technologies__list"
	usedTechnologies.forEach(
		elem => {
			const techItem = document.createElement("li")
			techItem.className = "used-technologies__list__wrapper border-common"
			if (elem.hiddenClass) {
				techItem.classList.add("hidden-one")
			}
			if (elem.hiddenId) {
				techItem.id = "specialDesktop"
			}
			const techImage = createImageElement(
				elem.imageIcon,
				elem.imageAlt,
				null,
				30
			)
			techItem.append(techImage)
			techList.append(techItem)
		}
	)
	techList.style.display = "flex"
	return techList
}