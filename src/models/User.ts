import sequelize from "sequelize";
const { Model, DataTypes } = sequelize;

import { sequelizeConnectionMain } from '../db/config';


class User extends Model {
	id: number;
	name: string;
	email: string;
	password: string;
	tenant: number;
};

User.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: DataTypes.STRING,
	email: DataTypes.STRING,
	password: DataTypes.STRING,
	tenant: DataTypes.INTEGER
}, {
	sequelize: sequelizeConnectionMain,
	tableName: 'USER',
	timestamps: false
});

export default User;
