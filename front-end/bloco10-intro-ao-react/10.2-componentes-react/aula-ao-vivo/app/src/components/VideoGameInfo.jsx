import React, { Component } from 'react';

class VideoGameInfo extends Component{
  render() {

    const { id, title, developer, sales, img } = this.props.game;
    
    return (
      <div className='video-game'>
        ID: {id} <br />
        Título: {title} <br />
        Empresa desenvolvedora: {developer} <br />
        Vendas: {sales.toLocaleString('pt-BR')} <br />
        <img src={img} alt="" />
      </div>
    );
  }
}

export default VideoGameInfo;