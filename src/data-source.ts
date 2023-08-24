import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client } from './entity/Client';

export const DBMain = new DataSource({
    type: "postgres",
    host: "db_main",
    port: 5432,
    username: "main",
    password: "main",
    database: "main",
    synchronize: true,
    logging: true,
    entities: [Client],
    subscribers: [],
    migrations: [],
});

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

DBMain.initialize()
    .then(() => {
    })
    .catch((error) => console.log(error))
