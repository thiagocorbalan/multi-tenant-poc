import { Request, Response } from "express";
import ClientRepository from "../repositories/ClientRepository";


export default {
	index: async (req: Request, res: Response) => {
		const tenant = req.tenant;

		const result = await ClientRepository.list(tenant);
		res.send(result);
	}
}
