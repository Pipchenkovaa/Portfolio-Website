import { css } from "./styles.js"
import { headerBlock, infoCard, getInTouchButton, telegramButton, headingDescription, bodyDescription, avatarCard } from "./headerCards.js"

class Block {
	constructor (value, options) {
		this.value = value, 
		this.options = options
	}

	toHtml() {
		throw new Error('The toHtml method must be implemented!')
	}
}

export class greetingInfoCard extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHtml() {
		const {tag = 'h1', styles} = this.options
		return infoCard((), css(styles))
	}
}