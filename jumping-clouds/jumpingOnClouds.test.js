const jumpingOnClouds = require("./jumpingOnClouds");

test("should return four steps given array of safe and unsafe clouds", () => {
  const c = [0, 0, 1, 0, 0, 1, 0];

  const result = jumpingOnClouds(c);

  expect(result).toEqual(4);
});

test("should return minimum number of jumps needed given array of save and unsafe clouds", () => {
  const c = [0, 0, 0, 1, 0, 0];

  const result = jumpingOnClouds(c);

  expect(result).toEqual(3);
});
