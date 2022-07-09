// --- --- --- --- --- --- --- --- --- ---
// Para fazer requisições de uma API, podemos utilizar then e catch, ou async await com o try catch.
// Async -> informa que a função irá retornar algo assíncrono
// await -> aguarda que a promisse seja completa para continuar o resultado
// try e catch -> trata a situação se der algum erro em um bloco de tentativa no código (try) e o catch trata estes erros
// --- --- --- --- --- --- --- --- --- ---
// const fetch = require('node-fetch');

// const getRandomAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const request = fetch(url)
//     .then((response) => response.json())
//     .then(({ slip: { id, advice } }) => console.log(advice))
//     .catch((error) => console.log('Ops, algo deu errado', error.errno));
// }

// getRandomAdvice();

// --- --- --- --- --- --- --- --- --- ---
const fetch = require('node-fetch');

const getRandomAdvice = async () => { 
  try {
    const url = 'https://api.adviceslip.com/advice';
    const request = await fetch(url);
    const json = await request.json();
    const { slip } = json;
    const { id, advice } = slip;
    console.log(advice);
    return advice;  
  } catch(error) {
    return 'Always check your Internet connection and your URLs';
  }
};  


getRandomAdvice();