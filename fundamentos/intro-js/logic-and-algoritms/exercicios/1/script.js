// Exercício 1

let fatorial = 10;
let fatorFinal = 1;

for (let index = fatorial; index > 0; index--) {
  fatorFinal = fatorFinal * index;
  
}

console.log(fatorFinal);

// Exercicio 2

let palavra = 'Tryber';
let palavraInvertida = '';

for (let index = palavra.length - 1; index >= 0; index--) {
  palavraInvertida = palavraInvertida + palavra[index];
  
}

console.log(palavraInvertida);


// Exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord, smallerWord;

biggerWord = array[0].length;
smallerWord = array[0].length;
smallerWordValue = 0;
biggerWordValue = 0;

for (let index = 0; index < array.length; index++) {
  if (array[index].length > biggerWord) {
    biggerWord = array[index].length;
    biggerWordValue = array[index];
  }

  if (array[index].length < smallerWord) {
    smallerWord = array[index].length;
    smallerWordValue = array[index];
  }

}

console.log(biggerWordValue);
console.log(smallerWordValue);

//Exercício 4
let divisor = 0;
let primo = 0;
for (let index = 1; index <= 50; index++) {
  for (let index2 = 1; index2 <= 50; index2++) {
    if (index % index2 === 0) {
      divisor += 1;
    }
    
  }
  if (divisor < 3) {
    primo = index;
  }
  
}

console.log(primo);
