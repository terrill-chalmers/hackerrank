"use strict";

// Complete the sock-merchant function below.
function sockMerchant(n, ar) {
  let sockPairObject = {};

  let sockStringArray = ar.map(sock => sock.toString());

  sockStringArray.forEach(currentSock => (sockPairObject[currentSock] = sockPairObject[currentSock] ? sockPairObject[currentSock] + 1 : 1));

  return Object.values(sockPairObject).reduce((total, currSockQty) => total + Math.trunc(currSockQty / 2), 0);
}

module.exports = sockMerchant;
