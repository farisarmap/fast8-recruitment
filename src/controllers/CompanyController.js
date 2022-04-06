const { Company } = require("../models")
const { PostSchema, UpdateSchema } = require("../schemas/validator/company")

module.exports = {
	addCompany: async (req, res, next) => {
		try {
			const { body } = req
			const { value, error } = PostSchema.validate(body)
			if (error) {
				next({
					status: 400,
					code: "400",
					data: null,
					message: error.details[0].message,
				})
			} else {
				const findCompany = await Company.findOne({
					where: {
						company_name: value.company_name,
					},
				})
				if (findCompany) {
					next({
						status: 409,
						code: "409",
						data: null,
						message: "Company Name already exist",
					})
				} else if (!findCompany) {
					const createCompany = await Company.create(value)
					res.status(201).json({
						status: 201,
						code: "201",
						data: {
							id: createCompany.id,
						},
						message: "Success",
					})
				}
			}
		} catch (error) {
			next(error)
		}
	},
	getCompany: async (req, res, next) => {
		try {
			const data = await Company.findAndCountAll({
				attributes: { exclude: ["createdAt", "updatedAt"] },
			})
			if (data) {
				res.status(200).json({
					status: 200,
					code: "200",
					data,
				})
			} else if (!data) {
				next({
					status: 422,
					code: "422",
					data: null,
					message: "Data is not found",
				})
			}
		} catch (error) {
			next(error)
		}
	},
	updateCompany: async (req, res, next) => {
		try {
			const { id } = req.params
			const findCompany = await Company.findByPk(id)

			if (!findCompany) {
				next({
					status: 422,
					code: "422",
					data: null,
					message: "Data is not found",
				})
			} else {
				if (findCompany.is_active) {
					next({
						status: 400,
						code: "400",
						data: null,
						message: "Company is already active",
					})
				} else if (!findCompany.is_active) {
					const updateIsActive = await Company.update(
						{ is_active: true },
						{
							where: {
								id,
							},
						}
					)
					if (updateIsActive) {
						const findUpdateCompany = await Company.findByPk(id)
						res.status(200).json({
							status: 201,
							code: "201",
							data: {
								id: findUpdateCompany.id,
								is_active: findUpdateCompany.is_active,
							},
							message: "Success",
						})
					}
				}
			}
		} catch (error) {
			next(error)
		}
	},
}
