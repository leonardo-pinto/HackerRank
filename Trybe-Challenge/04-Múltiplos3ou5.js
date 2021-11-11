function multiples_of_3_or_5(roof) {
  let sum = 0;

  for (let i = 0; i < roof; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }

  return sum;

}

const roof = 10

console.log(multiples_of_3_or_5(roof));
