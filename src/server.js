import express from 'express';
import routes from '../routes/routes';

const app = express();

app.use(express.json());

routes(app);

const server = app.listen(3000, () => {
	console.info('app running on port.', server.address().port);
});
