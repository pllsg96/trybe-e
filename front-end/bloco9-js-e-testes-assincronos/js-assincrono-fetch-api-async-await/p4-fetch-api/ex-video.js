// --- --- --- --- --- --- --- --- --- ---
const fetch = require('node-fetch');
const getRandomAdvice = () => {
  const url = 'https://api.adviceslip.com/advice';
  const request = fetch(url).then((response) => console.log(response.json()));
  console.log(request);
};

getRandomAdvice();