const arr = ['Ana', 'Pedro', 'Giovana'];

// arr.filter((element, index, array) => console.log(`Elemento: ${element}, índice: ${index}, Array: ${array}`));

const filtered = arr.filter((element) => element === 'Ana');

console.log(filtered);
// O filter sempre retorna um array, mesmo que seja um elemento só, ele retornará um array.

const notaEstudantes = [
  {
    nome: 'Joicy',
    nota: 100,
  },
  {
    nome: 'Ronald',
    nota: 50,
  },
  {
    nome: 'Joel',
    nota: 80,
  },
  {
    nome: 'Ana',
    nota: 90,
  },
  {
    nome: 'Carol',
    nota: 70,
  }
];

notaEstudantes.filter((element) => console.log(element));

const estudantesComAprovacao = notaEstudantes.filter((pessoa) => pessoa.nota >= 80);
console.log(estudantesComAprovacao);

const estudantesSemAprovação = notaEstudantes.filter((pessoa) => !(pessoa.nota >= 80));
console.log(estudantesSemAprovação);