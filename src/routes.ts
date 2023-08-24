import * as dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from "express";
import * as url from 'url';
import { DBMain } from "./data-source";
import { Client } from "./entity/Client";
dotenv.config();

const router = express.Router();

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

router.use((req: Request, res: Response, next: NextFunction) => {
	console.log('Time: ', Date.now())
	next()
})

router.get('/login', (req: Request, res: Response) => {
  res.send({ msg: 'Login'})
})

router.get('/logout', (req: Request, res: Response) => {
  res.send({msg: 'Logout'})
})

router.get('/clients', async (req: Request, res: Response) => {
	const clientRepository = DBMain.getRepository(Client);

	const result = await clientRepository.find();
	res.send(result);
})

export default router;
