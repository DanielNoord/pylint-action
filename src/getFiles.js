const github = require("@actions/github");
/**
 * Get file names to run pylint over based on commits.
 *
 * @param  {string} token Github API Token
 */
const getFiles = async function (token) {
  // TODO: Add tests for this function
  let files = "";
  const octokit = github.getOctokit(token);
  const context = github.context;

  const compareLink = context.payload.compare.split("/");

  const commit = await octokit.request("GET /repos/{owner}/{repo}/compare/{basehead}", {
    owner: compareLink[3],
    repo: compareLink[4],
    basehead: compareLink[6],
  });

  commit.data.files.forEach((element) => {
    if (element.filename.endsWith(".py")) {
      files += `${element.filename} `;
    }
  });

  return files;
};

exports.getFiles = getFiles;
