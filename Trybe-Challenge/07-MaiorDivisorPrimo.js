function largest_prime_factor(number) {
  let primeDivisors = [];

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      let divNumbers = 0;
      for (let j = 1; j <= i; j++) {
        if  (i % j === 0) {
          divNumbers++;
        }
      }
      
      if (divNumbers <= 2) {
        primeDivisors.push(i);
      }
    }
  }

  return primeDivisors[primeDivisors.length - 1];
}

const number = 13195;

console.log(largest_prime_factor(number));
