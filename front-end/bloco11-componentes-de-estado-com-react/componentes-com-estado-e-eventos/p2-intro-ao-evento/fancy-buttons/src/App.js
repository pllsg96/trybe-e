import './App.css';
import React, { Component } from 'react';

function handleClick1() {
  console.log('butao clickado1');
}
function handleClick2() {
  console.log('butao clickado2');
}
function handleClick3() {
  console.log('butao clickado3');
}

class App extends Component {
  render() {
    return (
      <>
        <button onClick={handleClick1}>Imprime Qualquer Coisa 1</button>
        <button onClick={handleClick2}>Imprime Qualquer Coisa 2</button>
        <button onClick={handleClick3}>Imprime Qualquer Coisa 3</button>
      </>
    );
  }
}

export default App;
