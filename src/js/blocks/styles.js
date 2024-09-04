export function css(styles = {}) {
	if (typeof styles === 'string') {
		return styles
	}
	
	const keys = Object.keys(styles)
	const array = keys.map(key => {
		return `${key}: ${styles[key]}`
	})
	return array.join(';')
}