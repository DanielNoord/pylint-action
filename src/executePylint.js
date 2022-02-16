const exec = require("@actions/exec");

/**
 * Execute pylint and return the output.
 * @param  {string} command Command to execute
 */
const executePylint = async function (command) {
  /** Capture variable for stdout. */
  let myOutput = "";
  /** Capture variable for stderr. */
  let myError = "";

  // Set up listeners
  const options = {};
  options.listeners = {
    stdout: (data) => {
      myOutput += data.toString();
    },
    stderr: (data) => {
      myError += data.toString();
    },
  };

  try {
    await exec.exec(command, [], options);
  } catch (error) {
    // Swallow that exit codes that pylint throws
  }

  return [myOutput, myError];
};

exports.executePylint = executePylint;
