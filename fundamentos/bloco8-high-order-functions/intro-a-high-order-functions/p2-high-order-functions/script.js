// ---------------------------------------
// High order functions são funções que utilizam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las.
// Ex: 
// O 'addEventListener' ~> é uma função que recebe como parâmetro uma ação e outra função para ser executada.
// ---------------------------------------
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

// ---------------------------------------
// OBS:
// First-Class Functions é o nome do conceito que define a forma que a linguagem (no nosso caso JavaScript) trata suas funções, permitindo que sejam suportadas em operações que são usadas em outros tipos (atribuição, retorno, parâmetro), e HOF é uma função que atende ao critério de receber como parâmetro e/ou retornar outra função.
// ---------------------------------------