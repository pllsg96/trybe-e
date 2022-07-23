import React, { Component } from "react";
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const writeThing = (conteudo) => {
  return (
    <div>
      <p>
        O {Object.keys(conteudo)[0]} é: {conteudo.conteudo}<br />
        O {Object.keys(conteudo)[1]} é: {conteudo.status}<br />
        O {Object.keys(conteudo)[2]} é: {conteudo.bloco}<br />
      </p>
    </div>
  );
}

class Content extends Component{
  render() {
    return (
      conteudos.map((conteudo) => writeThing(conteudo))
    )
  }
}

export default Content;