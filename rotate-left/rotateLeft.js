// Complete the rotLeft function below.
function rotLeft(a, d) {
  let newArray = [];

  a.map(
    (currentValue, currentIndex) =>
      (newArray[(a.length - d + currentIndex) % a.length] = currentValue)
  );

  return newArray;
}

module.exports = rotLeft;
