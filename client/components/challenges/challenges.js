var React = require('React');
var ReactDom = require('react-dom');
var axios = require('axios');

class Challenges extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<UserInfo username={props.username} points={props.points} level={props.level}/>
				<ChallengesList challengeslist={props.beginnerChallengesList} username={props.username}/>
				<ChallengesList challengeslist={props.intermediateChallengesList} username={props.username}/>
				<ChallengesList challengeslist={props.proChallengesList} username={props.username}/>
			</div>
		)
	}
}

/*requires props to be passed in*/

ReactDOM.render(<Challenges details={XYZ} />, document.getElementById('challenges'));