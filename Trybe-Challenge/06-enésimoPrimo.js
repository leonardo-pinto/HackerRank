function nth_prime(n) {
  let primeArr = [];
  for (let i = 1; primeArr.length <= n; i++) {
   
    let divNumbers = 0;
    for (let j = 1; j <= i; j++) {
      
      if (i % j === 0) {
        divNumbers++
      }
    }
    if (divNumbers <= 2) {
      primeArr.push(i);
    }
  }

  return primeArr[primeArr.length - 1];
}

const n = 15;

console.log(nth_prime(n));
