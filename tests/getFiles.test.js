const process = require("process");
const cp = require("child_process");
const path = require("path");
const testUtils = require("../src/testUtils/testUtils");
const getFiles = require("../src/getFiles");

describe("Test run", () => {
  test("Test run without inputs", () => {
    getFiles.getFiles(process.env["TEST_GITHUB_TOKEN"]);
  });
});
