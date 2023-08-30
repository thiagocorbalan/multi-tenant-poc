import Sequelize, { Model } from 'sequelize';
import { databaseMain, databaseTenant1 } from './../database';
import { Db } from '../database/types';
class Client extends Model {
	public id!: number;
	public name!: string;
	public email!: string;
};

export default (tenant: number) => {

	console.log('tenant', tenant);
	console.log('Db.MAIN', Db.MAIN);

	console.log('RESULTADO', tenant === 1 ? 'main' : 'tenant1');

	const sequelize = tenant === 1 ?
		databaseMain.connection :
		databaseTenant1.connection;

	Client.init({
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: Sequelize.STRING,
		email: Sequelize.STRING
	}, {
		tableName: 'CLIENT',
		timestamps: false,
		sequelize
	});

	return Client;
};
