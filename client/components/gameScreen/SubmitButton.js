//submit button.js
import React from 'react';
import axios from 'axios'
import Result from './Result.js';
import Timer from './Timer.js';

export class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			result: ""
		}
		this.onClick = this.onClick.bind(this)
	}
	
	onClick(e){

		this.props.submit(() => {
			console.log("entryForm Data: ", this.props.value)
			axios.post('/test', {
				value: this.props.value,
				testSuite: this.props.testSuite,
				algo: this.props.algo
			})

			.then( res => {
				console.log('RES', res.data.testResults)
				this.setState({ result : res.data})
			})

		})
	}


// on recieve props, we want the state to change

	render(){
		return (
			<div>
				<button className="btn waves-effect waves-light"  onClick={this.onClick}>Submit (will clear code)</button>
				<div>
				<Result sub={this.state.result}/>
				</div>
			</div>
		)
	}
}

export default SubmitButton