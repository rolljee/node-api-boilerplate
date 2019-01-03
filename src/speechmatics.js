const cp = require("child_process");

const SpeechMatics = {
  submit(license, lang) {
    const command = `docker run -i
	  -v ~/Downloads/output-audio.aac:/input.audio
	  -e LICENSE_KEY=${license} speechmatics-docker-prod-videomenthe.jfrog.io/transcriber-${lang}:6.0.2`;

    const process = cp.exec(
      command,
      { maxBuffer: Infinity },
      (error, stdout, stderr) => {
        if (error) {
			console.error(error);
		} else if (stderr) {
			console.error(stderr)
		} else {
			console.log(stdout);
		}

      }
    );
  },
  monitor() {}
};

module.exports = SpeechMatics;
