// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swapQty = 0;
  let currentIndex = 0;

  do {
    const sortedIndex = arr[currentIndex] - 1;

    if (currentIndex === sortedIndex) {
      currentIndex += 1;
    } else {
      const nextValue = arr[currentIndex];
      arr[currentIndex] = arr[sortedIndex];
      arr[sortedIndex] = nextValue;

      swapQty += 1;
    }
  } while (currentIndex < arr.length);

  return swapQty;
}

module.exports = minimumSwaps;
