import { createBlockElement, createDivElement } from "./functions.js"

const initials = createBlockElement(
	"p",
	null,
	null,
	"© Pipchencova Alina, 2024"
)

const rightsWrapper = createDivElement(
	"copy-rights body-text-color",
	null,
	initials
)

export const rightsSection = createBlockElement(
	"section",
	"rights",
	null,
	rightsWrapper
)
Object.assign(
	rightsSection.style, {
		display: "flex",
		justifyContent: "center",
	}
)