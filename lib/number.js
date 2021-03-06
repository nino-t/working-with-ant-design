export const number = {
	thousandFormat
}

function thousandFormat(number) {
	number = number.toString()
	let over 	= number.length % 3
	let money 	= number.substr(0, over)
	let thousand 	= number.substr(over).match(/\d{3}/g)

	if (thousand){
		let separator = over ? ',' : ''
		money += separator + thousand.join(',')
	}

	return money
}