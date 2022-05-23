//Exemplo 1 - click
let clickP = document.getElementById("clicar");

//Adiciona o evento de click
clickP.addEventListener("click", recebeClick);
clickP.addEventListener("mouseover", mouseEmCima);

function recebeClick(eventoDeOrigem) {
  //Objeto evento
  //As duas principais propriedades:
  //Target: O elemento que originou esse mesmo evento
  //Type: O tipo de evento que originou o click - Mouse, Keyboard, Screen...
  console.log(eventoDeOrigem.target);
  console.log(eventoDeOrigem.type);
}

//Exemplo 2 - Mouse Over, Mouse Leave
let mouseOverLeaveButton = document.getElementById("mouse-over-leave");

//Adiciona o evento de mouse over
mouseOverLeaveButton.addEventListener("mouseover", mouseEmCima);

//Adiciona o evento de mouse leave
mouseOverLeaveButton.addEventListener("mouseleave", mouseSaiuDoElemento)

function mouseEmCima(evento) {
  console.log("Mouse passou por cima");
  console.log(evento.target);
}

function mouseSaiuDoElemento() {
  console.log("Mouse saiu do elemento");
}