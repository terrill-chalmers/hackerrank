const repeatedString = require("./repeatedString");

test("should return seven given input variables", () => {
  const testString = "aba";
  const evaluationSubString = 10;

  const result = repeatedString(testString, evaluationSubString);

  expect(result).toEqual(7);
});

test("should return four given input variables", () => {
  const testString = "abcac";
  const evaluationSubString = 10;

  const result = repeatedString(testString, evaluationSubString);

  expect(result).toEqual(4);
});
