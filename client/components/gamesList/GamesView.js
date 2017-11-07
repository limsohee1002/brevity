var React = require('React');
var ReactDom = require('react-dom');
var axios = require('axios');

class GamesView extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<UserInfo username={props.username} points={props.points} level={props.level}/>
				<GamesList gameslist={props.beginnerChallengesList} username={props.username}/>
				<GamesList gameslist={props.intermediateChallengesList} username={props.username}/>
				<GamesList gameslist={props.proChallengesList} username={props.username}/>
			</div>
		)
	}
}

/*requires props to be passed in*/

ReactDOM.render(<GamesView details={XYZ} />, document.getElementById('games'));