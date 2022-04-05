const Joi = require("joi")

const PostSchemaEmployee = Joi.object({
	name: Joi.string()
		.trim()
		.min(2)
		.max(50)
		.required()
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.empty":
						err.message = "name is required"
						break
					case "string.min":
						err.message = "name minimum 3 character"
						break
					case "string.max":
						err.message = "name maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	email: Joi.string()
		.trim()
		.min(5)
		.max(255)
		.required()
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.empty":
						err.message = "email is required"
						break
					case "string.min":
						err.message = "email minimum 3 character"
						break
					case "string.max":
						err.message = "email maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	phone_number: Joi.string()
		.trim()
		.min(8)
		.max(16)
		.allow(null, "")
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.min":
						err.message = "phone_number minimum 3 character"
						break
					case "string.max":
						err.message = "phone_number maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	jobtitle: Joi.string()
		.trim()
		.required()
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.empty":
						err.message = "jobtitle is required"
						break
					default:
						break
				}
			})
			return errors
		}),
	company_id: Joi.number()
		.required()
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "number.empty":
						err.message = "company_id is required"
						break
					default:
						break
				}
			})
			return errors
		}),
})

const UpdateSchemaEmployee = Joi.object({
	name: Joi.string()
		.trim()
		.min(2)
		.max(50)
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.empty":
						err.message = "name is required"
						break
					case "string.min":
						err.message = "name minimum 3 character"
						break
					case "string.max":
						err.message = "name maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	email: Joi.string()
		.trim()
		.min(5)
		.max(255)
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.empty":
						err.message = "email is required"
						break
					case "string.min":
						err.message = "email minimum 3 character"
						break
					case "string.max":
						err.message = "email maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	phone_number: Joi.string()
		.trim()
		.min(8)
		.max(16)
		.allow(null, "")
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.min":
						err.message = "phone_number minimum 3 character"
						break
					case "string.max":
						err.message = "phone_number maximum 50 character"
						break
					default:
						break
				}
			})
			return errors
		}),
	jobtitle: Joi.string()
		.trim()
		.error((errors) => {
			errors.forEach((err) => {
				switch (err.code) {
					case "string.empty":
						err.message = "jobTitle is required"
						break
					default:
						break
				}
			})
			return errors
		}),
	// company_id: Joi.number().error((errors) => {
	// 	errors.forEach((err) => {
	// 		switch (err.code) {
	// 			case "number.empty":
	// 				err.message = "company_id is required"
	// 				break
	// 			default:
	// 				break
	// 		}
	// 	})
	// 	return errors
	// }),
})

module.exports = {
	PostSchemaEmployee,
	UpdateSchemaEmployee,
}
