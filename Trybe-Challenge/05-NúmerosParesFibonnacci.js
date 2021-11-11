function even_fibonacci_numbers(roof) {
  let fiboArr = [1, 2];
  let sum = 0;

  for (let i = 3; i <= roof; i++) {
    fiboArr.push(fiboArr[i - 3] + fiboArr[i - 2])
  }

  for (let j = 0; j <= fiboArr.length; j++) {
    if (fiboArr[j] < 100 && fiboArr[j] % 2 === 0) {
      sum = sum + fiboArr[j];
    }
  }

  return sum;
}

const roof = 0;

console.log(even_fibonacci_numbers(roof));
