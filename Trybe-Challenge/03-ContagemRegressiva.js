function count_down(x) {
  let response = '';

  for (let i = x; i >= 0; i--) {
    if (i !== 0) {
      response = response.concat(i.toString() + '...');
    } else {
      response = response.concat(i.toString() + '!!!');
    }
  }

  return response;
};

const x = 10;

console.log(count_down(x))