const core = require("@actions/core");

/**
 * Handle the output of a pylint run and annotate code.
 * @param  {string} output  Stdout
 * @param  {string} errors  Stderr
 */
const handleOutput = async function (output, errors) {
  console.log(`[*] Pylint output:`);
  if (output !== "") {
    let outputData = JSON.parse(output);
    core.error(`Found pylint error: ${outputData[0].symbol}`, {
      title: outputData[0].symbol,
      file: outputData[0].path,
      startLine: outputData[0].line,
      endLine: outputData[0].endLine,
      startColumn: outputData[0].column,
      endColumn: outputData[0].endColumn,
      message: outputData[0].message,
    });
    console.log(outputData);
  }
  if (errors !== "") {
    const errorsData = JSON.parse(errors);
    console.log(errorsData);
  }
};

exports.handleOutput = handleOutput;
