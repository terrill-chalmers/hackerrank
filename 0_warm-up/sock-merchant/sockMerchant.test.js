const sockMerchant = require("./sockMerchant");

const testSockArray1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const testSockArray2 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

test("should return three pairs given testSockArray1", () => {
  const result = sockMerchant(testSockArray1.length, testSockArray1);
  expect(result).toEqual(3);
});

test("should return four pairs given testSockArray2", () => {
  const result = sockMerchant(testSockArray2.length, testSockArray2);
  expect(result).toEqual(4);
});
