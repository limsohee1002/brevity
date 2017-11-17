import React from 'react';
import { Route, browserHistory } from 'react-router';
import { Link, IndexRoute, BrowserRouter as Router } from 'react-router-dom';

//GamesView -> GamesList
//      \----> GameFrame
//       \---> UserInfo 

const GamesList = (props) => (
    <div className="games">
      <h5 className="gametitle">Games</h5>
      <div className="game-list">
        {props.gamesList.map((game, i) => 
          <Link key={i + 1} to={'/gameList/' + (game.name ? game.name.replace(/ /g,'') : game.name)}><div key={i} className="z-depth-1 game_title" onClick={props.onGameSelect.bind(null, i)}>{game.name}</div></Link>
        )}
      </div>
    </div>
);

export default GamesList; 