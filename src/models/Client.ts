import sequelize from "sequelize";
import { sequelizeConnectionMain } from "./../db/config";

const { Model, DataTypes } = sequelize;


class Client extends Model {
	id: number;
	name: string;
	email: string;
};


export default (sequelizeConnection) => {
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
		sequelize: sequelizeConnection
	});

	return Client;
};
