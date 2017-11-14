//submit button.js
import React from 'react';
import axios from 'axios'
// the timer is imported to control an auto-submit when the timer runs out and
// to change results based on time. This feature has not yet been implemented. 
import Result from './Result.jsx';
import Timer from './Timer.jsx'; 
// This whole component could probably fit in the CodeEntryForm if you chose to refactor. 

// Recieves props from: 
	// recieves props from CodeEntryForm
// Gives props to: 
	// Results

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
			// console.log("entryForm Data: ", this.props.value)
			// post the value (which is the value of the ReactAce editor), the 
			// testSuite (which is passed down from where it is requested on the
			// GameFrame) and the algo (which is also on the GameFrame)
			axios.post('/test', {
				value: this.props.value,
				testSuite: this.props.testSuite,
				algo: this.props.algo
			})
			// this sets the result to the response, which causes a re-render, which 
			// renders the results.
			.then( res => {
				// console.log('RES', res.data.testResults)
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