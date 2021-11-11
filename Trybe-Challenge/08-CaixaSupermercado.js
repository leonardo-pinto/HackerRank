function caixa(values) {
  let newArr = values;
  for (let i = 0; i <= values.length; i++) {
    if (values[i] === 0) {
      console.log(newArr)
      newArr.splice(i-1, 2);
      console.log(newArr)
    }
    
  }

  return newArr;
}

const values = [1, 3, 5, 4, 0, 0, 7, 0, 0, 6]

console.log(caixa(values));

