import React from 'react';
import axios from 'axios';

import UserInfo from './UserInfo.jsx';
import GamesList from './GamesList.jsx';
import GameFrame from '../gameScreen/GameFrame.jsx';
//GamesView -> GamesList
//      \----> GameFrame
//       \---> UserInfo 

class GamesView extends React.Component {
  constructor(props) {
    super(props);
    // Sets default/dummy values for points and level -> replace with user data
    this.state = {
      points: 1000,
      level: 1,
      games: [],
      selectedGame: null
    };
    this.onGameSelect = this.onGameSelect.bind(this);
    this.onBack = this.onBack.bind(this);
  };
  
// Upon the GamesView mounting, we are making a get request to the /games route which will return an array of games to render on the page
// Will also need to replace user data, should Main.jsx handle this?
  componentDidMount() {
    axios.get('/games')
    .then((result) => {
      this.setState({ games: result.data });
    })
    .catch((err) => {
      throw(err);
    });
  };

  onGameSelect(idx) {
    this.setState({
      selectedGame: this.state.games[idx]
    });
  }

  onBack() {
    this.setState({
      selectedGame: null
    });
  }

//renders two components: UserInfo with dummy user date and GamesList with a list of available games. 
//The username prop is coming from main.js in the public folder
  render(){
    return (
      <div>
        <div className="red lighten-4 center">
        <UserInfo username={this.props.user} points={this.state.points} level={this.state.level} />
        </div>
        {this.state.selectedGame ?
          <GameFrame gameObject={this.state.selectedGame} onBack={this.onBack} /> :
          <GamesList gamesList={this.state.games} onGameSelect={this.onGameSelect} />}
      </div>
    );
  }
}

export default GamesView; 

