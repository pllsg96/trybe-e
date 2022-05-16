/*
_______________________________________________________________________________________________________________

1. Encontre o index através do valor de um elemento

Escreva uma algoritmo que recebe 2 parâmetros:
 - Um array
 - O valor de um elemento de tipo primitivo

Imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:
-----------------------------------
"Elemento não encontrado no array"
-----------------------------------
*/

let array = [1, 3, 4, 5, 6, 32, 54, 65];
let find = 6;

for (let index = 0; index < array.length; index++) {
  if(find === array[index]){ 
    console.log(index);
  }

  else {
    console.log("Elemento não encontrado");
  }
  
}

/*
_______________________________________________________________________________________________________________

2. Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:
----------------
"x, y, z, ...n"
----------------

*/

let impares = [];
for (let index = 1; index <= 50; index++) {
  if (index % 2 !== 0) {
    impares.push(index);    
  }
}

console.log(impares);
/*

_______________________________________________________________________________________________________________

3. Números divisíveis por 3

Escreva um algoritmo que cria uma sequência numérica de inteiros de razão 1, o algoritmo deve receber antes de
 criar o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais:
---------------------------------------
"Há 50 ou mais números diviseis por 3"
---------------------------------------

Caso o contrário:
--------------------------
"Sequência muito pequena."
--------------------------
____________________________________________________________________________________________________
*/

let numeroInicial = 0;
let numeroFinal = 0;
let numeros = 0;

for (let numeroInicial = 0; numeroInicial < numeroFinal; numeroInicial++) {
  console.log(numeroInicial)
}