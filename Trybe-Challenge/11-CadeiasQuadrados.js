function square_digit_chains(n) {
  let chainsNum = 0;

  for (let i = 0; i <= n; i++) {
    let numToStringSplit = i.toString().split('');
    let sumNumb = numToStringSplit.map(Number).reduce((acc, curr) => Math.pow(curr, 2) + acc, 0)

    console.log(sumNumb)
  }

}

const n = 100;

console.log(square_digit_chains(n))