import React, { Component } from "react";
import PropTypes from 'prop-types';
import VideoGameInfo from "./VideoGameInfo";

class VideoGameList extends Component{
  render() {

    const gamesList = this.props.games;

    const gamesHtmlElements = gamesList.map((game) => {
      return <VideoGameInfo
        key={game.id}
        game={game}
      />
    });

    return (
      <div className='video-game-list'>
        <h1>Lista de jogos mais vendidos no mundo</h1>
        {gamesHtmlElements}
      </div>
    );
  }

}

// Proptypes faz com que o tipo do dado esperado seja
// o que desejamos. Se por ventura não for o dado  
// esperado, retornará um erro no console
VideoGameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    developer: PropTypes.string,
    sales: PropTypes.number,
    img: PropTypes.string
  }))
}

export default VideoGameList;