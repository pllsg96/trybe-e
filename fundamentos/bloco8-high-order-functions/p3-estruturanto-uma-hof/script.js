// ---------------------------------------
// As HOFs nos permitem compactar ações e não somente repassar valores
// Ex:
// Esta função foi construida para fazer repetições de 0 até  o número definido no parâmetro number, já o console.log poderia ser substituido por alguma outro comando, já que o parâmetro action pode ser variado
// ---------------------------------------
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// ---------------------------------------
// Ex2:
// Neste exemplo está sendo chamada a função repeat, primeiramente passando o número que queremos testar e posteriormente irá executar a ação, sendo que nesta ação será testado se o número da vez é par, a partir do 'resto' ou 'módulo'. Caso o número seja par, irá ser feito o console log
// ---------------------------------------
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// ---------------------------------------
// Ex3:
// Neste exemplo basicamente se é utilizada a função do exemplo 2 porém adaptada para realizar testes também para ver se o número em questão é ímpar.
// OBS: a função recebida como argumento pela HOF é chamada de callback, assim como no exemplo repeat é uma HOF que recebe 'isEven' ou 'isOdd'
// ---------------------------------------
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

// ---------------------------------------
// Ex4:
// Neste caso ao executar o código o console.log irá retornar a escrita da função e não o valor a ser retornado por ela. Isso acontece porque após chamar a função, faltou a utilização dos parênteses para assim realizar sua execução.
// Esta lógica é igual ao utilizar callback dentro de outras funções, o JS considera suas funções cidadãs de primeira classe, permitindo assim a inserção delas em variáveis.
// ---------------------------------------
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator);