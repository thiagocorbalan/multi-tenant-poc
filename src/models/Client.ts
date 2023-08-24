import sequelize, { Sequelize } from "sequelize";
const { Model, DataTypes } = sequelize;

class Client extends Model {
	id: number;
	name: string;
	email: string;
};

export default (sequelize: Sequelize) => {
	Client.init({
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		email: DataTypes.STRING
	}, {
		tableName: 'CLIENT',
		timestamps: false,
		sequelize
	});

	return Client;
};
