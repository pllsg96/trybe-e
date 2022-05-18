let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index++) {
  sum = sum + fruits[index];
  
}

console.log(fruits);
console.log(sum);

if (sum > 15) {
  console.log(sum);
}

else if (sum <= 15) {
  console.log("valor menor que 16");
}