function staircase(n) {
  for (let i = 0; i < n; i++) {
    let stairStep = '';

    for (let j = 1; j <= n; j++) {
      if (j + i < n) {
        stairStep += ' '
      } else {
        stairStep += '#'
      }
    }
    console.log(stairStep);
  }
}

const n = 6

console.log(staircase(n));
