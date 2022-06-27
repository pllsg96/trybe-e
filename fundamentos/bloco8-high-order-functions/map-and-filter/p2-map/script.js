const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

// pessoas.map((element, index, array) => console.log(element, index, array));


const novasPessoas = pessoas.map((element) => element.toUpperCase());
console.log(pessoas);
console.log(novasPessoas);

const novasPessoas2 = pessoas.map((element) => {
  const registro = {};
  registro.nome = element;
  registro.empresa = 'Trybe';
  return registro;
});

console.log(novasPessoas2);