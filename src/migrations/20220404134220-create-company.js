"use strict"
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Companies", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			company_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			telephone_number: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: null,
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			address: {
				type: Sequelize.STRING,
				allowNull: true,
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
		await queryInterface.dropTable("Companies")
	},
}
