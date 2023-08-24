import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
	const user = sequelize.define('USER', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		tenant: DataTypes.INTEGER
	}, { tableName: 'USER', timestamps: false });

	return user;
}
