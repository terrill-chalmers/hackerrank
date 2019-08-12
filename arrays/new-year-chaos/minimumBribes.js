// Complete the minimumBribes function below.
function minimumBribes(q) {
  let bribeQty = 0;
  let takeAnotherPassThroughTheQueue;
  let queueIsTooChaotic;

  const swapQueueRiders = thisIndex => {
    let thisRider = q[thisIndex];
    q[thisIndex] = q[thisIndex + 1];
    q[thisIndex + 1] = thisRider;
    bribeQty += 1;
  };

  do {
    takeAnotherPassThroughTheQueue = false;

    for (let currentRiderIndex = 0; currentRiderIndex < q.length - 1; currentRiderIndex++) {
      let currentRider = q[currentRiderIndex];
      let nextRider = q[currentRiderIndex + 1];

      if (currentRider - (currentRiderIndex + 1) > 2) {
        queueIsTooChaotic = true;
        break;
      } else if (currentRider > nextRider) {
        swapQueueRiders(currentRiderIndex);
        takeAnotherPassThroughTheQueue = true;
      }
    }
  } while (takeAnotherPassThroughTheQueue);

  if (queueIsTooChaotic) {
    console.log("Too chaotic");
  } else {
    console.log(bribeQty);
  }
}

module.exports = minimumBribes;
