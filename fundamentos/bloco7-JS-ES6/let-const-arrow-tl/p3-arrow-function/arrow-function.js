//Formas de declarar a função da mesma forma


//-----------------------------------------
// Forma 1
// function soma(num1, num2) {
//   return num1 + num2;
// }

// console.log(soma(2, 2));

//-----------------------------------------
// Forma 2
// const soma = function soma(num1, num2) {
//   return num1 + num2;
// }

// console.log(soma(2, 2));

//-----------------------------------------
// Forma 3
// const soma = (num1,num2) => {
//   return num1 + num2;
// }

// console.log(soma(2, 2));

//-----------------------------------------
// Forma 4
const soma = (num1, num2) => num1 + num2;

console.log(soma(2, 2));

//-----------------------------------------
// Exemplo de outra função
// function contaPalavras(frase) {
//   return frase.split(" ").length;
// }

// console.log(contaPalavras("Fala tribo, beleza?"));

const contaPalavras = frase => frase.split(" ").length;

console.log(contaPalavras("Fala tribo, beleza?"));

//-----------------------------------------
// Exemplo de outra função
// function objetoPessoa(nome, idade) {
//   return {
//     nome: nome,
//     idade: idade
//   }
// }

// console.log(objetoPessoa("Joaquim", 25))

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade });

console.log(objetoPessoa("Joaquim", 25))