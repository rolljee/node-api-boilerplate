const SpeechMatics = require('../src/speechmatics');

const appRouter = function(app) {
  app.post("/submit", function(req, res) {
    res.status(200).send("You just started a new Job");
  });
  app.get("/status/:pid", function(req, res) {
    res.status(200).send("You should be monitoring the speechmatics");
  });
};

module.exports = appRouter;
