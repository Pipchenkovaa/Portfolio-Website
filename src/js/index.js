import { createDivElement } from "./blocks/functions.js"
import { sections } from "./utils.js"

const mainContainer = createDivElement("container", "app")
document.body.append(mainContainer)

sections.forEach(
	section => mainContainer.insertAdjacentHTML("beforeend", section)
)