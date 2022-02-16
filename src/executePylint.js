const exec = require("@actions/exec");

/**
 * Execute pylint and return the output.
 * @param  {string} command Command to execute. 'pylint --output-format=json' gets added.
 */
const executePylint = async function (command) {
  /** Capture variable for stdout. */
  let myOutput = "";
  /** Capture variable for stderr. */
  let myError = "";

  let pylintCommand = `pylint --output-format=json ${command}`;

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
    await exec.exec(pylintCommand, [], options);
  } catch (error) {
    // Swallow the exit codes that pylint throws
  }

  return [myOutput, myError];
};

exports.executePylint = executePylint;
