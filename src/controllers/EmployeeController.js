const { Employee, Company } = require("../models")
const {
	PostSchemaEmployee,
	UpdateSchemaEmployee,
} = require("../schemas/validator/employee")

module.exports = {
	addEmployee: async (req, res, next) => {
		try {
			const { company_id } = req.params
			const { body } = req
			const payload = {
				...body,
				company_id,
			}
			const { value, error } = PostSchemaEmployee.validate(payload)

			if (error) {
				next({
					status: 400,
					code: "400",
					data: null,
					message: error.details[0].message,
				})
			} else {
				const findUserByEmail = await Employee.findOne({
					where: { email: value.email },
				})
				if (findUserByEmail) {
					next({
						status: 409,
						code: "409",
						data: null,
						message: "Email already exist",
					})
				} else {
					const createEmployee = await Employee.create(value)
					res.status(201).json({
						status: 201,
						code: "201",
						data: {
							id: createEmployee.id,
							company_id: createEmployee.company_id,
						},
						message: "Success",
					})
				}
			}
		} catch (error) {
			next(error)
		}
	},
	getEmployeesByCompany: async (req, res, next) => {
		try {
			const { id } = req.params
			const data = await Company.findOne({
				where: { id },
				include: [
					{
						model: Employee,
						as: "employees",
						attributes: {
							exclude: [
								"createdAt",
								"updatedAt",
								"email",
								"company_id",
							],
						},
					},
				],
				attributes: {
					exclude: [
						"createdAt",
						"updatedAt",
						"telephone_number",
						"address",
					],
				},
			})
			if (data) {
				res.status(200).json({
					status: 200,
					code: "200",
					data,
					message: "Success",
				})
			} else {
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
	getEmployeeById: async (req, res, next) => {
		try {
			const { id } = req.params
			const data = await Employee.findByPk(id, {
				attributes: {
					exclude: ["createdAt", "updatedAt", "company_id", "email"],
				},
			})
			if (!data) {
				next({
					status: 422,
					code: "422",
					data: null,
					message: "Data is not found",
				})
			} else if (data) {
				res.status(200).json({
					status: 200,
					code: "200",
					data,
					message: "Success",
				})
			}
		} catch (error) {
			next(error)
		}
	},
	editEmployee: async (req, res, next) => {
		try {
			const employee_id = req.params.employee_id
			const company_id = req.params.company_id
			const { body } = req
			const { value, error } = UpdateSchemaEmployee.validate(body)
			if (error) {
				next({
					status: 400,
					code: "400",
					data: null,
					message: error.details[0].message,
				})
			} else {
				if (value.email) {
					const findEmployeeByEmail = await Employee.findAll({
						where: { email: value.email },
					})
					if (findEmployeeByEmail.length !== 0) {
						next({
							status: 409,
							code: "409",
							data: null,
							message: "Email already exist",
						})
					} else {
						const updateEmployee = await Employee.update(value, {
							where: {
								id: employee_id,
								company_id,
							},
						})
						if (updateEmployee) {
							const data = await Employee.findOne({
								where: { id: employee_id },
							})
							res.status(201).json({
								status: 201,
								code: "201",
								data: {
									id: data.id,
									company_id: data.company_id,
								},
								message: "Success",
							})
						}
					}
				} else {
					const updateEmployee = await Employee.update(value, {
						where: {
							id: employee_id,
							company_id,
						},
					})
					if (updateEmployee) {
						const data = await Employee.findOne({
							where: { id: employee_id },
						})
						res.status(201).json({
							status: 201,
							code: "201",
							data: {
								id: data.id,
								company_id: data.company_id,
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
	deleteEmployee: async (req, res, next) => {
		try {
			const { id } = req.params
			const destroyEmployeeData = await Employee.destroy({
				where: { id },
			})
			res.status(204).json({ message: "Success" })
		} catch (error) {
			next(error)
		}
	},
}
