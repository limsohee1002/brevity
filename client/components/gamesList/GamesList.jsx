//This is a component which houses a list of games

var React = require('React');
var axios = require('axios');
import Game from './Game.jsx';

// Gamesview -> GamesList -> Game
//     \--> UserInfo

export class GamesList extends React.Component{
  constructor(props){
    super(props);
  }

//renders each game that is returned by the '/games' route(called from GamesView.js). 
//The props are coming from the GamesView
  render(){
    return (
      <div>
        <h5> Games </h5>
          <div >
            {this.props.gameslist.map(function(game){
              <br/>
              return <div className="z-depth-4" >
               <Game game={game} /></div>
               
            })}
          </div>
      </div>
    )
  }
}

export default GamesList; 