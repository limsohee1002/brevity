//This is the highest level view of the page that will include a list of all available challenges

var React = require('React');
var axios = require('axios');

import UserInfo from './UserInfo.js';
import GamesList from './GamesList.js';

// Gamesview -> GamesList -> Game
//     \--> UserInfo

export class GamesView extends React.Component {
	constructor(props) {
		super(props);
		//sets default/dummy values for points and level
		this.state = {
			points: 1000,
			level: 2,
			games: [ ], 
		};
	};
	
//upon the GamesView mounting, we are making a get request to the /games route which will return an array of games to render on the page
	componentDidMount(){
		axios.get('/games')
		.then(function(result){
			this.setState({games:result.data});
		}.bind(this))
		.catch((err) => {
			throw(err)});
	};

//renders two components: UserInfo with dummy user date and GamesList with a list of available games. 
//The username prop is coming from main.js in the public folder
	render(){
		return (
			<div>
				<div className=" red lighten-4 center" >
				<UserInfo username={this.props.user} points={this.state.points} level={this.state.level}/>
				</div>
				<GamesList gameslist={this.state.games} username={this.props.username}/>
			</div>
		)
	}
}

export default GamesView; 

