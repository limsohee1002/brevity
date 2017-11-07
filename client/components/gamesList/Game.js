class Game extends React.Component {
	constructor(props) {
		super(props);

	};

	handleClick(){
		var getRequestData = {
			url: '/problem',
			method: 'get',
			data: {
				this.props.username,
				this.props.problemId
			}
		};

		axios.get(getRequestData).then(function(response){
			console.log(response);

		}).catch(function(error){
			console.log(error);
		})
	};

	render(){
		<div>{this.props.game.description}</div>
	};
}

