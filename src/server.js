import express from 'express';
import routes from '../routes/routes.js';

const app = express();

app.use(express.json());

routes(app);

const server = app.listen(3000, function() {
	console.log('app running on port.', server.address().port);
});
