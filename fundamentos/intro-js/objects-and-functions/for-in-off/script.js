let pizzas = {
  sabor: "Palmito",
  preco: 39.90,
  bordaDeCatupiry: true
};

for (let key in pizzas) {
  console.log(pizzas[key]);
  //console.log(pizzas['bordaDeCatupiry']);
  //               ou
  //console.log(pizzas.bordaDeCatupiry);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
  console.log(key);
  console.log(pizzasDoces);
  console.log(key, "-", pizzasDoces[key]);
  console.log("-----------");
}