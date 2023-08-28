import { NextFunction, Request, Response } from "express";
import { verify } from "./../services/jwt";

export default async (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers['x-access-token'] as string;

	if(!token) {
		res.status(403).send({ msg: 'Not authorized'});
		return;
	}

	const tenant = await verify(token);
	if(!tenant) {
		res.status(401).send({ msg: 'Not authorized' });
		return;
	}
	req.tenant = tenant;
	next();
}
