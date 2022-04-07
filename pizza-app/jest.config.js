const jestConfig = {
  verbose: true,
  testURL: "http://localhost/",
  'transform': {
    '\\.(js|jsx)$': 'babel-jest',
  },
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
}

module.exports = jestConfig