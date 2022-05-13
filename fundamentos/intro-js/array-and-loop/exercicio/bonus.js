// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sortNumbers = [];
let mulNumbers = [];

numbers.sort(function(a, b){return a-b});

console.log(numbers);

numbers.sort(function (a, b) { return b - a });

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++){

  console.log(index);
  if (index < numbers.length - 1) {
    mulNumbers[index] = numbers[index] * numbers[index + 1];
  }
  else {
    mulNumbers[index] = numbers[index] * 2;
  }
  
  
}

console.log(mulNumbers);