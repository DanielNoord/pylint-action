const executePylint = require("../src/executePylint");

describe("Download pylint", () => {
  test("Test no output on correct file", async () => {
    const [output, errors] = await executePylint.executePylint(
      "tests/data/python/good_file.py",
    );

    // Assert output
    expect(output).toStrictEqual("");
    expect(errors).toStrictEqual("");
  });

  test("Test output on bad file", async () => {
    const [output, errors] = await executePylint.executePylint(
      "tests/data/python/bad_file.py",
    );

    // Assert output
    expect(output).toStrictEqual(`[
    {
        "type": "warning",
        "module": "bad_file",
        "obj": "",
        "line": 9,
        "column": 0,
        "endLine": 9,
        "endColumn": 1,
        "path": "tests/data/python/bad_file.py",
        "symbol": "pointless-statement",
        "message": "Statement seems to have no effect",
        "message-id": "W0104"
    }
]
`);
    expect(errors).toStrictEqual("");
  });
});
