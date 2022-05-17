let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 -------- 
console.log("/---/--- ~> 1 <~ ---/---/");

console.log("Bem vinda, " + info.personagem);

// 2 -------- 
console.log(" ");
console.log("/---/--- ~> 2 <~ ---/---/");

info.recorrente = 'Sim';

console.log(info);

// 3 -------- 
console.log(" ");
console.log("/---/--- ~> 3 <~ ---/---/");
for (const key in info) {
  console.log(key);

}

// 4 -------- 
console.log(" ");
console.log("/---/--- ~> 4 <~ ---/---/");

for (const key in info) {
  console.log(info[key]);

}

// 5 -------- 
console.log(" ");
console.log("/---/--- ~> 5 <~ ---/---/");

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #148",
  nota: 'O último MacPatinhas', 
  recorrente: "Sim"
};

for (const propriedade in info) {
  if (info[propriedade] !== info2[propriedade]) {
    console.log(info[propriedade] +' e '+ info2[propriedade]);
  }  
  else {
    console.log("Ambos recorrentes");
  }
}

// 6 -------- 
console.log(" ");
console.log("/---/--- ~> 6 <~ ---/---/");
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};


console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + "'" + leitor.livrosFavoritos[0].titulo + "'");

