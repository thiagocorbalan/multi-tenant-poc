
import Client from "../models/Client";

export default {
	list: async (tenant: number) => {
		const clientModel = Client(tenant);
		const result = await clientModel.findAll();
		return result;
	}
}
