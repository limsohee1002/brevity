//This component will render the name of a specific game, which upon being clicked will render the prompt, code editor, and tests for that game. 

var React = require('React');
var axios = require('axios');
import GameFrame from '../gameScreen/GameFrame.jsx'

// Gamesview -> GamesList -> Game
//     \--> UserInfo

export class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rendered: false,
		};
	};

//upon click of a game in the games list, the "rendered" state variable will be changed between false and true.
	handleClick (){
		this.setState({
	 		rendered : !this.state.rendered
		})
	};

//if the game list item has been clicked, a game frame (with details of the game) will be rendered
	render(){
		// console.log('this is the value of rendered', this.state.rendered)
		return (!this.state.rendered) ? 
		(
		<div onClick= {this.handleClick.bind(this)} >{this.props.game.name}</div>) :
		(<GameFrame gameObject = {this.props.game}/>)
	};
}

export default Game; 

