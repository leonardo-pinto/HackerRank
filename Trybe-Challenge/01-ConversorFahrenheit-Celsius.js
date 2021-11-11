function fahrenheit_to_celsius(temp_fahrenheit) {
  const tempCelsius = parseFloat((temp_fahrenheit - 32)/1.8).toFixed(1);

  return tempCelsius;
}

const temp_fahrenheit = 95.1;

fahrenheit_to_celsius(temp_fahrenheit);