import { SectionBlock, DivBlock, TextBlock } from "./classes.js";

const initials = new TextBlock(
	"p",
	undefined,
	"© Pipchencova Alina, 2024"
).toHtml()

const rightsWrapper = new DivBlock(
	"copy-rights body-text-color",
	initials,
	undefined
).toHtml()

export const rightsSection = new SectionBlock(
	"rights",
	rightsWrapper
).toHtml()