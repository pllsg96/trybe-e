import './App.css';
import VideoGameList from './components/VideoGameList';
import gamesList from './data'
import React, { Component } from 'react';

class App extends Component{
  render() {
    return (
      <div className='App'>
        {/* // Isto aqui é a criação de uma props, estamos jogando o array gamesList dentro do
        // componente VideoGameList.jsx */}
        <VideoGameList games={ gamesList } />
      </div>
    );    
  }
}


export default App;