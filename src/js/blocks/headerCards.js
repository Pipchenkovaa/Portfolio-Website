export function headerBlock(content, styles='') {
	return `
		<div class='cardCover'>
			<section class='welcomeInfo' style='${styles}'>
				${content}
			</section>
		</div>
	`
}

export function infoCard(content, styles='') {
	return `
		<div class='aboutMe' style='${styles}'>
			${content}
		</div>
	`
}

export function getInTouchButton(content, styles='') {
	return `
		<div class='getInTouch' style='${styles}'>
			${content}
		</div>
	`
}

export function telegramButton(content, styles='') {
	return `
		<div class='tg' style='${styles}'>
			${content}
		</div>
	`
}

export function headingDescription(content, styles='') {
	return `
		<div class='headerText' style='${styles}'>
			${content}
		</div>
	`
}

export function bodyDescription(content, styles='') {
	return `
		<div class='mainText' style='${styles}'>
			${content}
		</div>
	`
}

export function avatarCard(content, styles='') {
	return `
		<div class='avatarCover'>
			<div class='avatar' style='${styles}'>
				${content}
			</div>
		</div>
	`
}