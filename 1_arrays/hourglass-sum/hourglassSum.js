// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let maxSum = -64;
  let r = 0;
  let c = 0;
  let i;
  let j;

  const getValueOfCurrentHourglass = (r, c) => {
    return (
      arr[r][c] +
      arr[r][c + 1] +
      arr[r][c + 2] +
      arr[r + 1][c + 1] +
      arr[r + 2][c] +
      arr[r + 2][c + 1] +
      arr[r + 2][c + 2]
    );
  };

  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      let currentSum = getValueOfCurrentHourglass(r + i, c + j);

      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

module.exports = hourglassSum;
