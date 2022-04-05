const factorial = (a, b) => {
	let prd = a,
		i = a

	while (i++ < b) {
		prd *= i
	}
	return prd
}

module.exports = factorial
