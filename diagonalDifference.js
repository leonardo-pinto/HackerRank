function diagonalDifference(arr) {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < arr[0].length; i++) {
    leftDiagonalSum += arr[i][i]
    rightDiagonalSum += arr[i][arr[0].length - 1 - i]
  }
  
  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]

console.log(diagonalDifference(arr));