class ParentBlock {
	constructor(className, content) {
		this.className = className,
		this.content = content
	}
	toHtml() {
		throw new Error('The toHtml method must be implemented!')
	}
}

export class SectionBlock extends ParentBlock {
	constructor(className, content) {
		super(className, content)
	}
	toHtml() {
		return `
			<section class="${this.className}">
				${this.content}
			</section>
		`
	}
}

export class DivBlock extends ParentBlock {
	constructor(className, content, id) {
		super(className, content)
		this.id = id
	}
	toHtml() {
		if (this.id === undefined) {
			return `
				<div class="${this.className}">
					${this.content}
				</div>
			`
		} else {
			return `
				<div class="${this.className} id="${this.id}"">
					${this.content}
				</div>
			`
		}
	}
}

export class ImageBlock extends ParentBlock {
	constructor(src, alt, className, width) {
		super(className)
		this.src = src
		this.alt = alt
		this.width = width
	}
	toHtml() {
		if (this.className === undefined) {
			return `
				<img src="${this.src}" alt="${this.alt}" width="${this.width}">
			`
		} else if (this.width === undefined) {
			return `
				<img src="${this.src}" alt="${this.alt}" class="${this.className}">
			`
		} else {
			return `
				<img src="${this.src}" alt="${this.alt}" class="${this.className}" width="${this.width}">
			`
		}
	}
}

export class LinkBlock extends ParentBlock {
	constructor(href, className, content) {
		super(className, content)
		this.href = href
	}
	toHtml() {
		if (this.className === undefined) {
			return `
				<a href="${this.href}">
					${this.content}
				</a>
			`
		} else {
			return `
				<a href="${this.href}" class="${this.className}">
					${this.content}
				</a>
			`
		}
	}
}

export class TextBlock {
	constructor(tag, className, content) {
		this.className = className
		this.content = content
		this.tag = tag
	}
	toHtml() {
		if (this.className === undefined) {
			return `
				<${this.tag}>
					${this.content}
				</${this.tag}>
			`
		} else {
			return `
				<${this.tag} class="${this.className}">
					${this.content}
				</${this.tag}>
			`
		}
	}
}

