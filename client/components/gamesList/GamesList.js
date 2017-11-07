var GamesList = (props) => {
	return (
		<div>
			<h5> Games </h5>
				<ul>
					{this.props.gamesList.map(function(game){
						return <li><Game game={game} onClick={this.handleClick} /></li>
					})}
				</ul>
		</div>
	)
}
