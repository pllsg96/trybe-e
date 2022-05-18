// Mais exemplos para for/in

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}
console.log("------------------------");

// ----------------------------------

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

console.log("------------------------");

// ----------------------------------

// O for in percorre o índice o objeto, já o for off, percorre o valor do objeto.
let food = ['hamburguer', 'bife', 'acarajé'];
console.log("For in");
for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;
console.log(" ");
console.log("For off");
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

console.log("------------------------");