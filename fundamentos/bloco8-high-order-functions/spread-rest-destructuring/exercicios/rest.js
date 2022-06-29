// ---------------------------------------
// Exercício 2 - Utilizar rest pra realizar a soma de elementos

const coisa = (acc, num) => acc + num;
const sumAll = (...numbers) => console.log(numbers.reduce(coisa, 0));
sumAll(3, 4, 6, 7, 10);
