// ---------------------------------------
// Spread operator
// espalha valores de arrays e objetos
// ajuda a promover imutabilidade no código

const carros = ['gol', 'hb20', 'focus'];
const motos = ['bis', 'r1'];

const veiculos = [...carros, ...motos];
const veiculos2 = ['f40',...carros, ...motos];

console.log(veiculos);
console.log(veiculos2);

// ---------------------------------------
// Spread operator com objetos

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoa = {
  nome: 'Nádia',
  idade: '28',
  cidade: 'BH',
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'corrida',
}

console.log(pessoaTryber);