import * as dotenv from 'dotenv';
import Sequelize, { Error } from 'sequelize';

dotenv.config();

const MESSAGES = {
	SUCCESS: 'Connection has been established successfully.',
	ERROR: 'Unable to connect to the database:'
};

class Database {
	public connection: Sequelize.Sequelize;
	private dbConfig?: string;

	constructor(dbConfig) {
		this.dbConfig = dbConfig;
		this.init();
	}

	init() {
		this.connection = new Sequelize.Sequelize(`${this.dbConfig}`);
		this.connection.authenticate()
			.then(() => console.log(MESSAGES.SUCCESS))
			.catch((err: Error) => console.error(MESSAGES.ERROR, err))
	}
}

export const databaseMain: Database = new Database(process.env.DATABASE_URL);
export const databaseTenant1: Database = new Database(process.env.DATABASE_URL_TENANT1);
