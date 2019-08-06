// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swapQty = 0;

  const swap = (currentArray, lowIndex, highIndex) => {
    const temp = currentArray[lowIndex];
    currentArray[lowIndex] = currentArray[highIndex];
    currentArray[highIndex] = temp;

    swapQty += 1;
  };

  const selectionSort = currentArray => {
    for (let index = 0; index < currentArray.length; index++) {
      if (currentArray[index] !== index + 1) {
        swap(currentArray, index, currentArray.indexOf(index + 1));
      }
    }
  };

  selectionSort(arr);

  return swapQty;
}

module.exports = minimumSwaps;
