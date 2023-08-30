import Sequelize, { Model } from 'sequelize';
import { databaseMain } from './../database';

class User extends Model {
	public id!: number;
	public name!: string;
	public email!: string;
	public password!: string;
	public tenant!: number;
};

User.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: Sequelize.STRING,
	email: Sequelize.STRING,
	password: Sequelize.STRING,
	tenant: Sequelize.INTEGER
}, {
	sequelize: databaseMain.connection,
	tableName: 'USER',
	timestamps: false
});

export default User;
