let ingredientItens = [
 "150 g de bacon picadinho",
 "1 xícara(café) de azeite",
 "2 cebolas picadinhas",
 "6 dentes de alho amassados",
 "500 g de feijão cozido e escorrido",
 "1 cubo de caldo de bacon",
 "4 ovos fritos inteiros e picadinhos",
 "cheiro - verde a gosto",
 "1 e 1 / 2 colher de farinha de mandioca crua",
 "sal e pimenta a gosto"
]

let ingredientList = document.querySelector(".ingredients-list");

for (let index = 0; index < ingredientItens.length; index++) {
  let ingredient = ingredientItens[index];

  let ingredientListItens = document.createElement("li");
  ingredientListItens.innerText = ingredient;
  ingredientListItens.className = "ingrendients-list-item";

  ingredientList.appendChild(ingredientListItens);  
  
}

let ingredientListItens2 = document.querySelectorAll(".ingrendients-list-item");
console.log(ingredientListItens2);

for (let index = 0; index < ingredientListItens2.length; index++) {
  let element = ingredientListItens2[index]

  if (element.innerText.includes("bacon")) {
    ingredientList.removeChild(element);
  }
  
}

