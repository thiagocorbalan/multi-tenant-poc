import bodyParser from 'body-parser';
import express, { Express } from 'express';
import Routes from './routes';

const app:Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(Routes);

app.listen(port, () => {
	console.log(`Express It's running on port ${port}`);
})
