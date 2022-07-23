import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    const skills = ["HTML", "CSS", "JavaScript", "React"] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (
      <div>
        <h1>Pedro Luiz Lopes Santos Gonçalves</h1>
        <p>Atualmente estudante de desenvolvimento web pela Trybe. Bacharel em engenharia mecatrônica e admirador de música, crossfit e games.
        </p>
        <h2>Minhas habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    );
  }
}

export default HelloWorld