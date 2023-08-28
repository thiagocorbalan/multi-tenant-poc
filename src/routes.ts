import * as dotenv from 'dotenv';
import express, { Request, Response } from "express";
import Clients from './controllers/Clients';
import auth from './middlewares/auth';
import UserRepository from './repositories/UserRepository';
import { sign } from './services/jwt';
dotenv.config();

const router = express.Router();

///const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// router.use((req: Request, res: Response, next: NextFunction) => {
// 	console.log('Time: ', Date.now())
// 	next()
// })

router.post('/login', async (req: Request, res: Response) => {
	const { email, password } = req.body;

	const user = await UserRepository.findUser(email, password);

	if(!user) {
		res.status(404).send({ msg: 'User not found'});
		return;
	}

	const token = sign(user);

	res.send(token);
})

router.get('/logout', (req: Request, res: Response) => {
  res.send({msg: 'Logout'})
})

router.get('/clients', auth, Clients.index);

export default router;
