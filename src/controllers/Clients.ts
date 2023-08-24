import { Request, Response } from "express";
import Client from "./../models/Client";
import { sequelizeConnectionMain, sequelizeConnectionTenant1 } from "./../db/config";

//TODO: Multitenant rule that chooses which one to connect
const connection = false ? sequelizeConnectionMain : sequelizeConnectionTenant1;
const clientModel = Client(connection);

export default {
	index: async (req: Request, res: Response) => {
		const result = await clientModel.findAll();
		res.send(result);
	}
}
