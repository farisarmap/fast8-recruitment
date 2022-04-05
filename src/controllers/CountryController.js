const axios = require("axios")

module.exports = {
	getCountry: async (req, res, next) => {
		try {
			const countryURL = process.env.PUBLIC_URL
			const { data: result } = await axios({
				url: countryURL,
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			})
			res.status(200).json({
				status: 200,
				code: "200",
				data: result,
				message: "Success",
			})
		} catch (error) {
			next({
				status: 400,
				code: "400",
				data: null,
				message: "Something Went Wrong",
			})
		}
	},
}
