const hourglassSum = require("./hourglassSum");

test("should return 28 given the test array", () => {
  const arr1 = [-9, -9, -9, 1, 1, 1];
  const arr2 = [0, -9, 0, 4, 3, 2];
  const arr3 = [-9, -9, -9, 1, 2, 3];
  const arr4 = [0, 0, 8, 6, 6, 0];
  const arr5 = [0, 0, 0, -2, 0, 0];
  const arr6 = [0, 0, 1, 2, 4, 0];

  const arr = [arr1, arr2, arr3, arr4, arr5, arr6];

  // console.log(`array: `, arr);

  const result = hourglassSum(arr);

  expect(result).toEqual(28);
});

test("should return nineteen given the test array", () => {
  const arr1 = [1, 1, 1, 0, 0, 0];
  const arr2 = [0, 1, 0, 0, 0, 0];
  const arr3 = [1, 1, 1, 0, 0, 0];
  const arr4 = [0, 0, 2, 4, 4, 0];
  const arr5 = [0, 0, 0, 2, 0, 0];
  const arr6 = [0, 0, 1, 2, 4, 0];

  const arr = [arr1, arr2, arr3, arr4, arr5, arr6];

  // console.log(`array: `, arr);

  const result = hourglassSum(arr);

  expect(result).toEqual(19);
});
