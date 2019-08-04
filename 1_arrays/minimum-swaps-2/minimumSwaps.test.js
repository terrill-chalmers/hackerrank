const minimumSwaps = require("./minimumSwaps");

test("should return three given 2 3 4 1 5", () => {
  const testArray = [2, 3, 4, 1, 5];

  const results = minimumSwaps(testArray);

  expect(results).toEqual(3);
});

test("should return three given 1 3 5 2 4 6 7", () => {
  const testArray = [1, 3, 5, 2, 4, 6, 7];

  const results = minimumSwaps(testArray);

  expect(results).toEqual(3);
});

test("should return 11 given 3 7 6 9 1 8 10 4 2 5", () => {
  const testArray = [3, 7, 6, 9, 1, 8, 10, 4, 2, 5];

  const results = minimumSwaps(testArray);

  expect(results).toEqual(11);
});

test("should return 46", () => {
  const testArray = [2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33, 50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28, 36, 30, 37, 35, 20, 17, 45, 43, 25, 19];

  const results = minimumSwaps(testArray);

  expect(results).toEqual(46);
});
