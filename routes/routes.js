const SpeechMatics = require("../src/speechmatics");

const appRouter = function(app) {
  app.post("/submit", function(req, res) {
    SpeechMatics.submit(req, res);
    res.status(200).send("Job started sucessfully");
  });
  app.get("/status/:pid", function(req, res) {
    SpeechMatics.monitor(req, res);
    res.status(200).send("You should be monitoring the speechmatics");
  });
};

module.exports = appRouter;
