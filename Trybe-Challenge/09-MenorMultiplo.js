function smallest_multiple(roof) {
  for (let i = 1; i > 0; i++) {
    let numberOfDivisions = 0;

    for (let j = 1; j <= roof; j++) {
      if (i % j === 0) {
        numberOfDivisions++;
      }
    }

    if (numberOfDivisions === roof) {
      return i
    }
  }
}

const roof = 10

console.log(smallest_multiple(roof));
