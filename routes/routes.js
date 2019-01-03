const SpeechMatics = require("../src/speechmatics");

const appRouter = function(app) {
  app.post("/submit", function(req, res) {
    try {
      const pid = SpeechMatics.submit(req.body);
      res.status(200).send(JSON.stringify({
        pid,
      }));
    } catch (e) {
      res.status(400).send(JSON.stringify({
        error: e,
      }));
    }
  });
  app.get("/status/:pid", function(req, res) {
    try {
      const result = SpeechMatics.monitor(req.params.pid);
      res.status(200).send(JSON.stringify(result));
    } catch (e) {
      res.status(400).send(JSON.stringify({
        error: e,
      }));
    }
  });
};

module.exports = appRouter;
