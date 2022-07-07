// --- --- --- --- --- --- --- --- --- ---
// Método fetch é utilizado para requisitar informações de outro endereço, por padrão ele vem no navegador, porém não vem no Node.Na versão 16 ele não vem, logo é preciso instalar o node fetch nesta versão.
// Fetch url vai abrir o site e receber a informação
// A promisse pode estar:
// pending (pendente), fullfilled (carregada) ou failed (rejeitada)
// .then (então), irá esperar a promisse terminar, receberá um callback (função)
// .then((response) => ação(response));
// O response quando retornado response.json() vai retornar outra promessa com a extração do json, logo é necessário aguardar a extração dele utilizando
// .then((obj) => {}) que retornará um objeto com os dados requisitados
// --- --- --- --- --- --- --- --- --- ---
const fetch = require('node-fetch');

const getRandomAdvice = () => {
  const url = 'https://api.adviceslip.com/advice';
  const request = fetch(url)
    .then((response) => response.json())
    .then(({ slip: { id, advice } }) => console.log(id, advice))
    .catch((error) => console.log('Ops, algo deu errado', error.errno));
    // .then((objeto) => {
    // const { slip } = objeto;
    // const { id, advice } = slip;
    // console.log(id, advice);
    // });
};

getRandomAdvice();