// ---------------------------------------
// Ex encontrar o maior número utilizando for
const numbers = [50, 85, -30, 3, 15];

let biggerNumber = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > biggerNumber) biggerNumber = numbers[i];
}
console.log(biggerNumber);

// ---------------------------------------
// Ex encontrar o maior número utilizando reduce

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85