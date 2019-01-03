const cp = require('child_process');
const isRunning = require('is-running');
const results = [];

const SpeechMatics = {
  submit({ license, audioFilePath, lang }) {
    if (!license) {
      throw new Error("No license submited");
    }
    if (!audioFilePath) {
      throw new Error("No audio file path submited");
    }
    if (!lang) {
      throw new Error("No lang submited");
    }
    const command = `docker run -i -v ${audioFilePath}:/input.audio -e LICENSE_KEY=${license} speechmatics-docker-prod-videomenthe.jfrog.io/transcriber-${lang}:6.0.2`;

    const process = cp.exec(
      command,
      { maxBuffer: Infinity },
      (error, stdout, stderr) => {
        if (error) {
          results.push({
            pid: process.pid,
            createdAt: new Date(),
            result: null,
            error: error,
          });
        } else if (stderr) {
          results.push({
            pid: process.pid,
            createdAt: new Date(),
            result: null,
            error: stderr,
          });
        } else {
          results.push({
            pid: process.pid,
            createdAt: new Date(),
            result: JSON.parse(stdout),
            error: null,
          });
        }
      }
    );
    return process.pid;
  },
  monitor(pid) {
    if (!pid) {
      throw new Error("No PID submited");
    }
    const result = results.find(res => Number(res.pid) === Number(pid));
    if (result) {
      setTimeout(function removeResult(pid) {
        const index = results.findIndex(res => Number(res.pid) === Number(pid));
        if (index > -1) {
          results.splice(index, 1);
        }
      }, 60 * 60 * 1000); // Remove the result 60 minutes after getting it
      if (result.error) {
        return {
          pid: pid,
          status: 'error',
          error: result.error,
        }
      } else {
        return {
          pid: pid,
          status: 'completed',
          result: result,
        }
      }
    } else if (isRunning(pid)) {
      return {
        pid: pid,
        status: 'running',
      }
    } else {
      return {
        pid: pid,
        status: 'error',
        error: 'Job and result not found',
      }
    }
  }
};

module.exports = SpeechMatics;
