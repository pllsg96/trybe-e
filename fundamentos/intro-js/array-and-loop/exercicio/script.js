let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;
let bigger = 0;
let smallest = 0;
let contImpares = 0;
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
  somaArray = somaArray + numbers[index];
  if (bigger < numbers[index]) {
    bigger = numbers[index];
  }

  if (numbers[index] % 2 >= 1) {
    contImpares += 1;
  }

}

console.log(somaArray);
console.log(somaArray / numbers.length);

if (numbers[numbers.length - 1] > 20) {
  console.log("Valor maior que 20");
}
else {
  console.log("Valor menor que 20");
}

console.log(bigger);
smallest = bigger;

if (contImpares === 0) {
  console.log("Nenhum valor ímpar encontrado");
}
else {
  console.log("Existem " + contImpares + " numeros impares");
}

for (let index = 0; index < numbers.length; index++) {
  if (smallest > numbers[index]) {
    smallest = numbers[index];
  }
  
}

console.log(smallest);



let uma25 = [];
let uma25div2 = [];

for (let index = 0; index < 25; index++) {
  uma25[index] = index + 1;  
  uma25div2[index] = uma25[index] / 2;

}

console.log(uma25);
console.log(uma25div2);