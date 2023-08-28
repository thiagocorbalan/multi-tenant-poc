import { Request, Response } from "express";
import { sequelizeConnectionMain, sequelizeConnectionTenant1 } from "./../db/config";
import Client from "./../models/Client";

const dbConnectionBuilder = (tenant?: string) => {
	const connect = tenant === '1' ? sequelizeConnectionMain : sequelizeConnectionTenant1;
	const clientModel = Client(connect);
	return clientModel;
}

type User = {
	id: number,
	name: string,
	email: string,
	password: string,
	tenant: number
}

export default {
	index: async (req: Request, res: Response) => {
		const { tenant } = req;
		const clientModel = dbConnectionBuilder(tenant);
		const result = await clientModel.findAll();
		res.send(result);
	}
}
