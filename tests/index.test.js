const process = require("process");
const cp = require("child_process");
const path = require("path");
const testUtils = require("../src/testUtils/testUtils");

/** Entry point into the action. */
const entryPoint = path.join(__dirname, "..", "src", "index.js");

describe("Test run", () => {
  describe("Test with good file", () => {
    beforeEach(() => {
      // Set the path to a file without any issues
      testUtils.setInput("path", "tests/data/python/good_file.py");

      // Mock console.log
      console.log = jest.fn();
    });

    test("Test run without inputs", () => {
      // Run program
      const stdout = cp.execSync(`node ${entryPoint}`, { env: process.env }).toString();

      // Check output
      const pylintOuput = stdout.split("Pylint output:")[1];
      expect(pylintOuput.includes("message")).toBeFalsy();
    });
  });

  describe("Test with bad file", () => {
    beforeEach(() => {
      // Set the path to a file with some issues
      testUtils.setInput("path", "tests/data/python/bad_file.py");

      // Mock console.log
      console.log = jest.fn();
    });

    test("Test run without inputs", () => {
      // Run program
      const stdout = cp.execSync(`node ${entryPoint}`, { env: process.env }).toString();

      // Check output
      const pylintOuput = stdout.split("Pylint output:")[1];
      expect(pylintOuput.includes("pointless-statement")).toBeTruthy();
    });
  });
});
