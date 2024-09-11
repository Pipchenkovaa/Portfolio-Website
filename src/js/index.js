import { createDivElement } from "./blocks/functions.js"
import { sections } from "./utils.js"
import "../styles/scss/body-style.scss"
import "../../tailwind/main.css"

const mainContainer = createDivElement("container", "app")
document.body.append(mainContainer)

sections.forEach(
	section => mainContainer.insertAdjacentHTML("beforeend", section)
)