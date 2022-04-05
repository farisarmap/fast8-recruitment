const factorial = require("../helper/factorial")

module.exports = {
	combination: (req, res, next) => {
		try {
			let n = +req.body.n
			let r = +req.body.r
			let result = null

			if (!n || !r) {
				next({
					status: 400,
					code: "400",
					data: null,
					message: "n or r is required",
				})
			} else {
				if (n == r || r == 0) {
					return 1
				} else {
					r = r < n - r ? n - r : r
					result = factorial(r + 1, n) / factorial(1, n - r)
				}
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
