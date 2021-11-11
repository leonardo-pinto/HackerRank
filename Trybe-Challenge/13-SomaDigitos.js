function digits_sum(number_s) {
  let equalSumArr = [];

  for (let i = 0; i <= 1000; i++) {
    let numToStringSplit = i.toString().split('');
    let sumNumb = numToStringSplit.map(Number).reduce((acc, curr) => acc + curr, 0);

    if (sumNumb === number_s) {
      equalSumArr.push(i);
    }
  }

  return equalSumArr.length
}

const number_s = 26;

console.log(digits_sum(number_s));
