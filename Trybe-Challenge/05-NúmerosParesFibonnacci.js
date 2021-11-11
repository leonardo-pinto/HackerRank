function even_fibonacci_numbers(roof) {
  let fiboArr = [1, 2];
  let sum = 0;

  for (let i = 3; i <= roof; i++) {
    fiboArr.push(fiboArr[i - 3] + fiboArr[i - 2])
  }

  console.log(fiboArr);

  for (let j = 0; j <= fiboArr.length; j++) {
    if (fiboArr[j] < roof && fiboArr[j] % 2 === 0) {
      sum = sum + fiboArr[j];
    }
  }

  return sum;
}

const roof = 3000000;

console.log(even_fibonacci_numbers(roof));
