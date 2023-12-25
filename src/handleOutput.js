const core = require("@actions/core");

/**
 * Handle the output of a pylint run and annotate code.
 * @param  {string} output  Stdout
 * @param  {string} errors  Stderr
 */
const handleOutput = async function (output, errors) {
  // TODO: Add tests
  console.log(`[*] Pylint output:`);
  if (output !== "") {
    let outputData = JSON.parse(output);

    outputData.forEach((pylintMessage) => {
      core.error(
        `Found pylint error: ${pylintMessage.symbol}.
Description: ${pylintMessage.message}`,
        {
          title: pylintMessage.symbol,
          file: pylintMessage.path,
          startLine: pylintMessage.line,
          endLine: pylintMessage.endLine,
          startColumn: pylintMessage.column,
          endColumn: pylintMessage.endColumn,
        },
      );
    });
  }
  if (errors !== "") {
    // If we experience errors, we fail the action
    const errorsData = JSON.parse(errors);
    console.log(errorsData);
    core.setFailed();
  }
};

exports.handleOutput = handleOutput;
