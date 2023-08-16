import express, { NextFunction, Response, Request } from "express";
const router = express.Router();

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

router.get('/clientes', (req: Request, res: Response) => {
  res.send({msg: 'clientes'})
})

export default router;
