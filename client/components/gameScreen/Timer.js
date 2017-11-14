
//Timer.js
import React from 'react';
import axios from 'axios'; 
import ReactCountdownClock from 'react-countdown-clock';
import CodeEntryForm from './CodeEntryForm.js';
import SubmitButton from './SubmitButton.js'

// Recieves props from: 
	// nowhere.
// Gives props to: 
	// none, but could be the submitButton. 
export class Timer extends React.Component {
	constructor(props) {
		super(props);
}

render(){
		return (
			<div >
	      <div > 
	          <ReactCountdownClock 
	            seconds={500}
	            color="#FF0000"
	            alpha={0.9}
	            size={100}
	            onComplete={this.props.testFun}
	          /> 
	       </div>
			</div>
		)
	}
}

export default Timer;
