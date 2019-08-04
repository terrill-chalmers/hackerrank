// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swapQty = 0;

  const swap = (currentArray, startingLowIndex, startingHighIndex) => {
    if (startingLowIndex !== startingHighIndex) {
      swapQty += 1;
    }

    const highValue = currentArray[startingLowIndex];
    currentArray[startingLowIndex] = currentArray[startingHighIndex];
    currentArray[startingHighIndex] = highValue;
  };

  const quickSort = (currentArray, startingLowIndex, startingHighIndex) => {
    let pivot = currentArray[Math.floor((startingHighIndex + startingLowIndex) / 2)];
    let currentLowIndex = startingLowIndex;
    let currentHighIndex = startingHighIndex;

    while (currentLowIndex <= currentHighIndex) {
      while (currentArray[currentLowIndex] < pivot) {
        currentLowIndex += 1;
      }
      while (currentArray[currentHighIndex] > pivot) {
        currentHighIndex -= 1;
      }
      if (currentLowIndex <= currentHighIndex) {
        swap(currentArray, currentLowIndex, currentHighIndex);
        currentLowIndex += 1;
        currentHighIndex -= 1;
      }
    }

    if (currentArray.length > 1) {
      if (startingLowIndex < currentLowIndex - 1) {
        quickSort(currentArray, startingLowIndex, currentLowIndex - 1);
      }
      if (currentLowIndex < startingHighIndex) {
        quickSort(currentArray, currentLowIndex, startingHighIndex);
      }
    }
    return currentArray;
  };

  quickSort(arr, 0, arr.length - 1);

  return swapQty;
}

module.exports = minimumSwaps;
