console.log(document.querySelector("#elementoOndeVoceEsta"));
let variavel = document.querySelector("#elementoOndeVoceEsta");
let father = variavel.parentNode;
father.style.background = "red";

let primeiroFilhodoFi = document.querySelector("#primeiroFilhoDoFilho");
primeiroFilhodoFi.innerHTML = "Adiciona texto ao filho do filho";

let pai = document.getElementById("pai");
console.log(pai.firstChild);

console.log(variavel.firstChild);
// document.getElementById("elementoOndeVoceEsta").parentNode;
