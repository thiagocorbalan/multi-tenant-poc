import jwt from 'jsonwebtoken';
const SECRET_TOKEN = process.env.SECRET_TOKEN;

export const verify = async (token: string) => {
	try {
		const decoded = await jwt.verify(token, SECRET_TOKEN!);
		return (<any>decoded).user.tenant;
	} catch (error) {
		console.log(error);
	}
};

export const sign = (user: any) => {
	const token = jwt.sign(
		{ user },
		SECRET_TOKEN!,
		{ expiresIn: 120 }
	);
	return token;
};
