import express from 'express';
import bodyParser from 'body-parser';
import routes from '../routes/routes.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const server = app.listen(3000, function() {
	console.log('app running on port.', server.address().port);
});
