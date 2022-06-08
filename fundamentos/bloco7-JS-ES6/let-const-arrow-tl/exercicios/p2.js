function factorialNumber(numero) {
  let factorialNumber = numero;
  console.log(factorialNumber);
  for (let index = 1; index < numero; index++) {
    factorialNumber = factorialNumber * index;
  }
  return factorialNumber;
}

console.log(factorialNumber(5));