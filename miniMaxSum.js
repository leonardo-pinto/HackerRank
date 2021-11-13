function miniMaxSum(arr) {
  let sortedArr = arr.sort((a,b) => a - b);
  let miniSum = 0;
  let maxSum = 0;

  sortedArr.forEach((value, index) => {
    if (index !== 0) {
      maxSum += value
    } 

    if (index !== arr.length - 1) {
      miniSum += value;
    }
  })

  console.log(`${miniSum} ${maxSum}`);
}

const arr= [1, 2, 3, 4, 5];

console.log(miniMaxSum(arr));