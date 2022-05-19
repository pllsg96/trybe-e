let elementosP = document.getElementsByTagName("p");
let elementosDiv = document.getElementsByTagName("div");
let elementosSpan = document.getElementsByTagName("span");

console.log(elementosP);
console.log(elementosDiv);
console.log(elementosSpan);

elementosSpan[0].innerText = "Carlos Sainz";

console.log(elementosSpan);

// console.log(document.querySelector(".pilotos-sem-titulo p"));

// console.log(document.querySelector(".pilotos-sem-titulo .piloto-f1-atual"));

//document.querrySelector("#Dona") para selecionar ID
//document.querrySelector("p"); Retorna apenas o primeiro elemento (o primeiro que ele encontra, independente de ser uma classe).

//document.querrySelector(".pilotos-sem-titulo p"), faz uma seleção de um item limitando o seletor de forma similar ao css

//document.querrySelector(".piloto-f1-atual") retorna o primeiro que tem essa classe dentre tds os elementos

//document.querrySelector(".piloto-f1-atual .piloto-f1-atual") retorna o primeiro que tem essa classe dentre tds os elementos, levando em consideração todos os seletores desejados.

//document.querrySelectorAll tem o comportamento semelhante ao querrySelector, porém ele retorna um array com todos os elementos que fazem parte de sua seleção, ao invés de retornar apenas o primeiro deles. Ele pode substituir o document.selectElementByClassName.

