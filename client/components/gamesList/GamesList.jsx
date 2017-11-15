import React from 'react';

//GamesView -> GamesList
//      \----> GameFrame
//       \---> UserInfo 

const GamesList = (props) => (
  <div>
    <h5>Games</h5>
    <div>
      {props.gamesList.map((game, i) => 
        <div key={i} className="z-depth-4" onClick={props.onGameSelect.bind(null, i)}>{game.name}</div>
      )}
    </div>
  </div>
);

export default GamesList; 