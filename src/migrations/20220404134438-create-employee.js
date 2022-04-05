"use strict"
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Employees", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phone_number: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: null,
			},
			jobtitle: {
				type: Sequelize.ENUM("manager", "director", "staff"),
				allowNull: false,
				defaultValue: "staff",
			},
			company_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Companies",
					key: "id",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Employees")
	},
}
