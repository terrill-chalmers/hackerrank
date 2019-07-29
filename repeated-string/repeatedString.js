// Complete the repeatedString function below.
function repeatedString(s, n) {
  const getQtyOfAsInString = str =>
    [...str].reduce(
      (total, letter) => (letter === "a" ? (total += 1) : total),
      0
    );

  return (
    Math.trunc(n / s.length) * getQtyOfAsInString(s) +
    getQtyOfAsInString(s.substring(0, n % s.length))
  );
}

module.exports = repeatedString;
