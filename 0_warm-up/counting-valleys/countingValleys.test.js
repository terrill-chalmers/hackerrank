const countingValleys = require("./countingValleys");

const testArray1 = "UDDDUDUU";
const testArray2 = "DDUUDDUDUUUD";

test("should return one given testArray1", () => {
  const result = countingValleys(testArray1.length, testArray1);

  expect(result).toEqual(1);
});

test("should return two given testArray2", () => {
  const result = countingValleys(testArray2.length, testArray2);

  expect(result).toEqual(2);
});
