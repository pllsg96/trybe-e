const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// var tagLi = document.getElementsByTagName("li");
// tagLi.addEventListener("click", addTechLi);

// let nowImTech = document.getElementsByTagName("li");

// nowImTech.addEventListener("click", changeMe);

// function changeMe() {
//   let whoAmI = nowImTech.event.target;
//   console.log(whoAmI);
// }
// function addTechLi(){
//   tagLi[0].classList.remove("tech");
// }


// FORMA PERSONALIZADA 
// let tagFirstLi = document.getElementById("first-li");
// firstLi.addEventListener("click", addTechFirstLi);
// let tagSecondLi = document.getElementById("second-li");
// secondLi.addEventListener("click", addTechSecondLi);
// let tagThirdLi = document.getElementById("third-li");
// thirdLi.addEventListener("click", addTechThirdLi);

// function addTechFirstLi(){
//   tagFirstLi.classList.add("tech");
//   tagSecondLi.classList.remove("tech");
//   tagThirdLi.classList.remove("tech");
// }

// function addTechSecondLi() {
//   tagFirstLi.classList.remove("tech");
//   tagSecondLi.classList.add("tech");
//   tagThirdLi.classList.remove("tech");
// }

// function addTechThirdLi(){
//   tagFirstLi.classList.remove("tech");
//   tagSecondLi.classList.remove("tech");
//   tagThirdLi.classList.add("tech");
// }

// solução da trybe
// console.log(document.querySelector(".tech"));
// function handleChangeTech(event) {
//   console.log(event);
//   const techElement = document.querySelector('.tech');
//   console.log(techElement);
//   techElement.classList.remove('tech');
//   event.target.classList.add('tech');
//   // input.value = '';
// }

// firstLi.addEventListener('click', handleChangeTech);
// secondLi.addEventListener('click', handleChangeTech);
// thirdLi.addEventListener('click', handleChangeTech);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

    // let textbox = document.getElementById("input");
    // var clickLi = document.getElementsByTagName("li");
    // textbox.addEventListener("input", writingTextBox);

    // clickLi[0].addEventListener("click", funcaoAdicionaTech0);
    // clickLi[1].addEventListener("click", funcaoAdicionaTech1);
    // clickLi[2].addEventListener("click", funcaoAdicionaTech2);

    // function funcaoAdicionaTech0() {
    //   clickLi[0].classList.add("tech");
    //   clickLi[1].classList.remove("tech");
    //   clickLi[2].classList.remove("tech");
    //   writingTextBox(0);

    // }
    // function funcaoAdicionaTech1(){
    //   clickLi[0].classList.remove("tech");
    //   clickLi[1].classList.add("tech");
    //   clickLi[2].classList.remove("tech");
    //   writingTextBox(1);
    // }
    // function funcaoAdicionaTech2(){
    //   clickLi[0].classList.remove("tech");
    //   clickLi[1].classList.remove("tech");
    //   clickLi[2].classList.add("tech");
    //   writingTextBox(2);

    // }


    // function writingTextBox(index) {
    //   clickLi[index].innerText = input.value;
    // }

    // myWebpage.addEventListener("dblclick", goToSpotrybefy);

    // function goToSpotrybefy() {
    //   myWebpage.
    // }


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.