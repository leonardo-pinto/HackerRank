function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesInHouse = 0;
  let orangesInHouse = 0;
  
  apples.forEach((apple) => {
    let distanceFromTree = a + apple;
    if (distanceFromTree >= s && distanceFromTree <= t ) {
      applesInHouse++
    }
  });

  oranges.forEach((orange) => {
    let distanceFromTree = b + orange;
    if (distanceFromTree >= s && distanceFromTree <= t) {
      orangesInHouse++
    }
  });

  console.log(`${applesInHouse}\n${orangesInHouse}`);
}

const s = 2;
const t = 3;
const a = 1;
const b = 5;
const apples = [2];
const oranges = [-2];

console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
