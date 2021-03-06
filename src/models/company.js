"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Company extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Company.hasMany(models.Employee, {
				as: "employees",
				foreignKey: "company_id",
			})
		}
	}
	Company.init(
		{
			company_name: DataTypes.STRING,
			telephone_number: DataTypes.STRING,
			is_active: DataTypes.BOOLEAN,
			address: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Company",
		}
	)
	return Company
}
