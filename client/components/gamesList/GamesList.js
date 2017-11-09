var React = require('React');
var axios = require('axios');
import Game from './Game.js';

export class GamesList extends React.Component{
	constructor(props){
		super(props);
		console.log(this.props.gameslist , 'gameslist testConstructor');
	}

	componentDidMount(){
		console.log(this.props.gameslist , 'gameslist testCDN');
	}

	render(){
		console.log(this.props.gameslist , 'gameslist testrender');
		return (
			<div>
				<h5> Games </h5>
					<ul>
						{this.props.gameslist.map(function(game){
							return <li> <Game game={game} /></li>
						})}
					</ul>
			</div>
		)
	}
}

export default GamesList; 