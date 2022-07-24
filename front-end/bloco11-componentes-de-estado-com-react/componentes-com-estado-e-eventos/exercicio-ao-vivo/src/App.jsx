import React, { Component } from 'react';
import colors from './data';
import './App.css'

// Parei em 00:25:00 aula 11.1

class App extends Component{
  // O estado serve para guardar uma informação, enquanto o componente for vivo
  // Será sempre alocado quando estiver na página
  // Para se criar o estado, precisa acessar a função constructor()
  // No constructor, temos acesso as props
  // Toda linguagem orientada a objeto possui um construtor
  // Logo, toda classe, possui uma função que a constroi
  constructor(props) {
    super(props);
    // SE MINHA FUNÇÃO FOR UMA ARROW FUNCTION, NÃO PRECISO!!!
    // FAZER O BIND!!!
    // this.setFilterValue = this.setFilterValue.bind(this);
    // A ARROW FUNCTION SÓ FUNCIONA NO REACT FAZENDO COM QUE NÃO
    // NECESSITE A UTILIZAÇÃO DO BIND, POIS POR TRÁS DOS PANOS
    // O BIND ESTÁ SENDO EXECUTADO.

    this.state = {
      filter: ''
    }
  }

  setFilterValue = (event) => {
    // Set state atualiza a propriedade
    this.setState({
      filter: event.target.value
    });
  }

  render() {
    const { filter } = this.state;

    // Esta função faz o filtro dos itens que tem algum valor igual ao
    // recebido pela entrada no input
    // O includes é true quando há string, mesmo se este string
    // estiver vazio
    // O INCLUDES VOLTA TRUE OU FALSE, aliado ao filter, irá
    // retornar todos os valores que contem algum dos valores
    // desejados
    // StartsWith poderia utilizar para apenas pegar se começa com tal
    // coisa
    const filteredColors = colors.filter((colorItem) => {
      const color = colorItem.color;
      return color.includes(filter);
    });

    const htmlElementsList = filteredColors.map(({ color, value }) => {
      return <li key={color}>
        {color} em hexadecimal é: {value}
      </li>
    });

    return (
      // Quando utilizamos super() estamos alterando a Components
      <main>
        <input onChange={this.setFilterValue} type="text" />

        <ul>
          {htmlElementsList}
        </ul>
      </main>  
    )
  }

}

export default App;