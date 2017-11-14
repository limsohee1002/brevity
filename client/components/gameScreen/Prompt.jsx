//Prompt.js
import React from 'react';
import axios from 'axios'; 

// Recieves props from: 
	// GameFrame
// Gives props to: 
	// none

export class Prompt extends React.Component {
	constructor(props) {
		super(props);
}

render(){
		return (
			<div>
				<blockquote>
					<h3>{this.props.name}</h3>
				</blockquote>
				<div>{this.props.promptdetails}</div>
			</div>
		)
	}
}

export default Prompt;