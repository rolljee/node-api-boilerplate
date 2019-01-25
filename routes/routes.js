const Api = require('../src/api');

const appRouter = function createRoutes(app) {
	app.post('/submit', (req, res) => {
		try {
			const result = Api.submit(req.body);
			res.status(200).send(JSON.stringify(result));
		} catch (e) {
			res.status(400).send(JSON.stringify(e));
		}
	});
};

export default appRouter;
