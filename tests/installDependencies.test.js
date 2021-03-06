const cp = require("child_process");
const installDependencies = require("../src/installDependencies");

describe("Download pylint", () => {
  beforeEach(() => {
    // Mock console.log
    console.log = jest.fn();
  });

  test("Test specified version", async () => {
    await installDependencies.installPylint("2.11");

    // Assert correct version is installed
    const version = cp.execSync("pylint --version").toString();
    expect(version.includes("pylint 2.11")).toBeTruthy();
  }, 10000);

  test("Test latest version", async () => {
    await installDependencies.installPylint("latest");

    // Assert correct version is installed
    const version = cp.execSync("pylint --version").toString();
    expect(version.includes("pylint 2.12")).toBeTruthy();
  }, 10000);

  test("Test main", async () => {
    await installDependencies.installPylint("main");

    // Assert correct version is installed
    const version = cp.execSync("pylint --version").toString();
    expect(version.includes("-dev")).toBeTruthy();
  }, 30000);

  test("Test no version", async () => {
    await installDependencies.installPylint("");

    // Assert correct version is installed
    const version = cp.execSync("pylint --version").toString();
    expect(version.includes("pylint 2.12")).toBeTruthy();
  }, 10000);
});
