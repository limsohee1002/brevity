var ChallengesList = (props) => {
	return (
		<div>
			<h5> Challenges </h5>
				<ul>
					{this.props.challengesList.map(function(challenge){
						return <li><ChallengeItem challenge={challenge} onClick={this.handleClick} /></li>
					})}
				</ul>
		</div>
	)
}
