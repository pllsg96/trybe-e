// ---------------------------------------
// JS podemos atribuir funções a variáveis.
// ex 1
// function sum (number1, number2) {
//   return number1 + number2;
// }

// const sumVariable = sum;

// console.log(sumVariable);
//  [Function: sum]

// ---------------------------------------
// ex 2
// Passar funções como argumento para outras funções
// const sayHello = () => {
//   return ('hello trybers');
// }

// const printGreeting = (callback) => {
//     console.log(callback());
// }

// printGreeting(sayHello);

// ---------------------------------------
// ex3
// Retornar uma função de outra função
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));