//Prompt.js
import React from 'react';
import axios from 'axios'; 

export class Prompt extends React.Component {
	constructor(props) {
		super(props);
}

render(){
		return (
			<div>
				<h1> Prompt </h1>
				<div>{this.props.promptdetails}</div>
			</div>
		)
	}
}

export default Prompt;