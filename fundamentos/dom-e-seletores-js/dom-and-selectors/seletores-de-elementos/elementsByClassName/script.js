// console.log(document.getElementsByClassName("piloto-f1-atual"));
let pilotosF1 = document.getElementsByClassName("piloto-f1-atual");

for (let index = 0; index < pilotosF1.length; index+= 1) {
  pilotosF1[index].innerText = "Lewis Hamilton";
}