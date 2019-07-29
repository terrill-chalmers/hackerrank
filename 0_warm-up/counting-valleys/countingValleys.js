// Complete the counting-valleys function below.
function countingValleys(n, s) {
  let valleyQty = 0;
  let currentAltitude = 0;

  let addIfValleyEnding = currentStep => {
    const newQty = currentStep === "U" && currentAltitude === -1 ? 1 : 0;
    currentAltitude =
      currentStep === "U" ? (currentAltitude += 1) : (currentAltitude -= 1);
    return newQty;
  };

  [...s].forEach(currentStep => (valleyQty += addIfValleyEnding(currentStep)));

  return valleyQty;
}

module.exports = countingValleys;
