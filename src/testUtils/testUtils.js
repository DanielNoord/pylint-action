/**
 * Set input as normally supplied by action's yml file.
 *
 * @param  {string} name    Name of option
 * @param  {string} value   Value op the option
 */
const setInput = (name, value) =>
  (process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] = value);

exports.setInput = setInput;
