function sum_square_difference(n) {
  let squareSum = 0;
  let sumSquare = 0;

  for (let i = 0; i <= n; i++) {
    squareSum = squareSum + Math.pow(i, 2);
    sumSquare = sumSquare + i
  }

  const difference = Math.pow(sumSquare, 2) - squareSum;

  return difference;
}

const n = 10;

console.log(sum_square_difference(n));