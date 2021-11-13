function aVeryBigSum(ar) {
  return ar.reduce((curr, acc) => curr + acc, 0);
}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

console.log(aVeryBigSum(ar));