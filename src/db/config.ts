import * as dotenv from 'dotenv';
import { Error, Sequelize } from 'sequelize';

dotenv.config();

const MESSAGES = {
	SUCCESS: 'Connection has been established successfully.',
	ERROR: 'Unable to connect to the database:'
}

export const sequelizeConnectionMain = new Sequelize(`${process.env.DATABASE_URL}`);
sequelizeConnectionMain
	.authenticate()
	.then(() => console.log(`[dbMain] ${MESSAGES.SUCCESS}`))
	.catch((err: Error) => console.error(`[dbMain] ${MESSAGES.ERROR}`, err));


export const sequelizeConnectionTenant1 = new Sequelize(`${process.env.DATABASE_URL_TENANT1}`);
sequelizeConnectionTenant1
	.authenticate()
	.then(() => console.log(`[dbTenant1] ${MESSAGES.SUCCESS}`))
	.catch((err: Error) => console.error(`[dbTenant1] ${MESSAGES.ERROR}`, err));


// export const DBMain = new DataSource({
//     type: "postgres",
//     host: "db_main",
//     port: 5432,
//     username: "main",
//     password: "main",
//     database: "main",
//     synchronize: true,
//     logging: true,
//     entities: [Client],
//     subscribers: [],
//     migrations: [],
// });

// export const DBTenant1 = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5433,
//     username: "tenant1",
//     password: "tenant1",
//     database: "tenant1",
//     synchronize: true,
//     logging: true,
//     entities: [Client],
//     subscribers: [],
//     migrations: [],
// });
