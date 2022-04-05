module.exports = {
	fibonacci: (req, res, next) => {
		try {
			const number = +req.body.n
			if (!number) {
				next({
					status: 400,
					code: "400",
					data: null,
					message: "n is required",
				})
			} else {
				let n1 = 0,
					n2 = 1,
					nextTerm
				let temp = []
				for (let i = 1; i <= number; i++) {
					if (n1 <= number) {
						temp.push(n1)
					}
					nextTerm = n1 + n2
					n1 = n2
					n2 = nextTerm
				}
				let result = temp.join(" ")
				res.status(200).json({
					status: 200,
					code: "200",
					data: { result },
					message: "Success",
				})
			}
		} catch (error) {
			next(error)
		}
	},
}
