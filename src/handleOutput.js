/**
 * Handle the output of a pylint run and annotate code.
 * @param  {string} output  Stdout
 * @param  {string} errors  Stderr
 */
const handleOutput = async function (output, errors) {
  console.log(`[*] Pylint output:`);
  console.log(output);
  console.log(errors);
};

exports.handleOutput = handleOutput;
