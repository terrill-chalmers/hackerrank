const rotLeft = require("./rotateLeft");

test("should return new array given inputs", () => {
  const testArray = [1, 2, 3, 4, 5];
  const expectedArray = [5, 1, 2, 3, 4];
  const rotationQty = 4;

  let result = rotLeft(testArray, rotationQty);

  expect(result).toEqual(expectedArray);
});

test("should also return new array given inputs", () => {
  const testArray = [1, 2, 3, 4, 5];
  const expectedArray = [3, 4, 5, 1, 2];
  const rotationQty = 2;

  let result = rotLeft(testArray, rotationQty);

  expect(result).toEqual(expectedArray);
});
