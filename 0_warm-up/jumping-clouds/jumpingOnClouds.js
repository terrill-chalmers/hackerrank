// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let stepQty = 0;
  let currentStep = 0;
  const finalStep = c.length - 1;

  const takeNextStep = currentStep => {
    let nextStep;

    if (c[currentStep + 2] === 0) {
      nextStep = currentStep + 2;
    } else {
      nextStep = currentStep + 1;
    }

    return nextStep;
  };

  while (currentStep < finalStep) {
    currentStep = takeNextStep(currentStep);
    stepQty += 1;
  }

  return stepQty;
}

module.exports = jumpingOnClouds;
