const exec = require("@actions/exec");

/**
 * Install pylint using the 'exec' package.
 *
 * @param  {string} pylintVersion Pylint version to install.
 */
const installPylint = async function (pylintVersion) {
  if (pylintVersion === "") {
    pylintVersion = "latest";
  }

  console.log(`[*] Removing current installation of pylint`);
  await exec.exec("pip uninstall -y pylint");

  console.log(`[*] Installing pylint package @ ${pylintVersion}...`);

  // Install latest package on PyPi
  if (pylintVersion === "latest") {
    await exec.exec("pip install --upgrade --quiet pylint");

    // Install latest package on main
  } else if (pylintVersion === "main") {
    await exec.exec(
      "pip install --upgrade --quiet git+https://github.com/PyCQA/pylint"
    );

    // Install package on version as specified
  } else {
    await exec.exec(`pip install --upgrade --quiet pylint==${pylintVersion}`);
  }

  // Log installed pylint version
  console.log("[*] Installed pylint package version:");
  await exec.exec("pylint --version");
};

exports.installPylint = installPylint;
