
import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Link, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

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
      games: [1,2,3,4,5],
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
  //<Redirect from="/" exact to="/gameList" />
//renders two components: UserInfo with dummy user date and GamesList with a list of available games. 
//The username prop is coming from main.js in the public folder
  render(){
    return (
        <div>
         <div className="red lighten-4 center">
           <UserInfo username={this.props.user} points={this.state.points} level={this.state.level} />
         </div>
         
         <Switch>
           <Route exact path='/gameList' render={() => <GamesList gamesList={this.state.games} onGameSelect={this.onGameSelect} />}/>
           {this.state.games.map((game) => <Route path={'/gameList/' + (game.name ? game.name.replace(/ /g,'') : game.name)} render={() => <GameFrame gameObject={game} onBack={this.onBack} />} />)}
         </Switch>
       </div>
    );
  }
}

export default GamesView; 



