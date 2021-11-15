function kangaroo(x1, v1, x2, v2) {
  if (x2 > x1 && v2 > v1 || x1 > x2 && v1 > v2) {
    return 'NO';
  } 

  let onePosition = 0;
  let twoPosition = 0;
  for (let jumps = 0; jumps <= 100000; jumps++) {
    if (jumps === 0) {
      onePosition = x1 + v1;
      twoPosition = x2 + v2;
    } else {
      onePosition = onePosition + v1;
      twoPosition = twoPosition + v2;
    }

    if (onePosition === twoPosition) return 'YES';
  }

  return 'NO';

}

const x1 = 1928;
const v1 = 4306;
const x2 = 5763;
const v2 = 4301;

console.log(kangaroo(x1, v1, x2, v2));