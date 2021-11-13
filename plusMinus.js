function plusMinus(arr) {
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeros = 0;
  let arrSize = arr.length;

  arr.forEach(num => {
    if (num > 0) {
      positiveNumbers++
    } else if (num < 0) {
      negativeNumbers++
    } else {
      zeros++
    }
  })

  console.log(`${(positiveNumbers/arrSize).toFixed(6)}\n${(negativeNumbers/arrSize).toFixed(6)}\n${(zeros/arrSize).toFixed(6)}`)
}

