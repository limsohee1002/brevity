//submit button.js
import React from 'react';
import axios from 'axios'
import GameFrame from "./GameFrame.js"

export class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted : false, 
		}

		
	}
	onClick(e){
		alert(this.props.value)
		event.preventDefault();
	}

	render(){
		
		return (
			<div>
			<button onClick={this.onClick.bind(this)}>Submit</button>
			</div>
		)
	}
}

export default SubmitButton