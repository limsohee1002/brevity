class UserInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<div> Username: {this.props.username} </div>
				<div> Points: {this.props.points} </div>
				<div> Level: {this.props.level} <div>
			</div>
		)
	}
}