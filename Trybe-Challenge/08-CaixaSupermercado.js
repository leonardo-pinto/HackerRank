function caixa(values) {
  let newArr = values;

  for (let i = 0; i <= values.length; i++) {
    if (values[i] === 0) {
      newArr.splice(i - 1, 2);
      i = i-2
    }
  }

  let sumNewArr = newArr.reduce((acc, curr) => acc + curr, 0)
  return sumNewArr;
}

const values = [1, 3, 5, 4, 0, 0, 7, 0, 0, 6]

console.log(caixa(values));

