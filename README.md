[![codecov](https://codecov.io/gh/DanielNoord/pylint-action/branch/main/graph/badge.svg?token=9LT1QJFK7M)](https://codecov.io/gh/DanielNoord/pylint-action)

# `pylint` Github Action

**This is compeltely work in progress. Everything in this action can change and probably
will. Use with caution!**

This is a Github Action to run `pylint` against your repository.

To use it add the following to a workflow file or a new `.github/workflows/pylint.yml`
file:

```yaml
name: Pylint

on:
  push:
  pull_request:

jobs:
  pylint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: '3.x'

      ...
```
