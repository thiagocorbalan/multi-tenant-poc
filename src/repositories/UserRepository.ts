import User from "./../models/User";

export default {
	findUser: async (email: string, password: string) => {
		try {
			const result = await User.findOne({ where: { email, password} });
			return result;
		} catch (err) {
			console.log(err);
			return void 0;
		}
	}
}
