var React = require('React');
var axios = require('axios');

import UserInfo from './UserInfo.js';
import GamesList from './GamesList.js';

export class GamesView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			points: 1000,
			level: 2,
			games: [ ], 
		};
	};

	/*getData(){
		axios.get('/algos')
		.then(function(result){
			 //this.setState({games: result.data});
			console.log(JSON.stringify(result.data) + "this is result");
		}.bind(this))
		.catch((err) => {
			console.log("There's an ERROR with algos get request");
			throw(err)});
	}*/
	
	componentDidMount(){
		axios.get('/games')
		.then(function(result){
			this.setState({games:result.data});
		}.bind(this))
		.catch((err) => {
			throw(err)});
	};

	render(){
		return (
			<div>
				<UserInfo username={this.props.username} points={this.state.points} level={this.state.level}/>
				<GamesList gameslist={this.state.games} username={this.props.username}/>
			</div>
		)
	}
}

export default GamesView; 

