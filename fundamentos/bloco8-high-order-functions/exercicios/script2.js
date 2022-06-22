const sortResult = (begin,end) => Math.floor(Math.random() * end) + begin;

const amILucky = (result, luckyNumber) => {
  if (result === luckyNumber) return 'Parabéns você ganhou!';
  else return 'Tente novamente';
}

console.log(amILucky(sortResult(1, 5), 2));
