const Joi = require("joi")

const PostSchema = Joi.object({
	company_name: Joi.string()
		.trim()
		.min(3)
		.max(50)
		.required()
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.empty":
						err.message = "company_name is required"
						break
					case "string.min":
						err.message = "company_name minimum 3 character"
						break
					case "string.max":
						err.message = "company_name maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	telephone_number: Joi.string()
		.trim()
		.min(8)
		.max(16)
		.allow(null, "")
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.min":
						err.message = "telephone_number minimum 3 character"
						break
					case "string.max":
						err.message = "telephone_number maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	address: Joi.string()
		.trim()
		.min(10)
		.max(50)
		.allow(null, "")
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.min":
						err.message = "address minimum 3 character"
						break
					case "string.max":
						err.message = "address maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
})

const UpdateSchema = Joi.object({
	company_name: Joi.string()
		.trim()
		.min(3)
		.max(50)
		.required()
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.empty":
						err.message = "company_name is required"
						break
					case "string.min":
						err.message = "company_name minimum 3 character"
						break
					case "string.max":
						err.message = "company_name maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	telephone_number: Joi.string()
		.trim()
		.min(8)
		.max(16)
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.min":
						err.message = "telephone_number minimum 3 character"
						break
					case "string.max":
						err.message = "telephone_number maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	address: Joi.string()
		.trim()
		.min(10)
		.max(50)
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.min":
						err.message = "address minimum 3 character"
						break
					case "string.max":
						err.message = "address maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
})

module.exports = {
	PostSchema,
	UpdateSchema,
}
