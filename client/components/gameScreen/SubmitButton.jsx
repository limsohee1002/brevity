import React from 'react';
import axios from 'axios'

// SAM 11/14/2017 - We're gonna need to change this. Submit button and timer should both have
// a handler that informs GamesView that a submission has been made, whether it's the
// timer completing or the user pressing submit. 

// The timer is imported to control an auto-submit when the timer runs out and
// to change results based on time. This feature has not yet been implemented. 
import Result from './Result.jsx';
import Timer from './Timer.jsx'; 
// This whole component could probably fit in the CodeEntryForm if you chose to refactor. 

// Recieves props from: 
  // Recieves props from CodeEntryForm
// Gives props to: 
  // Results

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: ''
    };
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(e) {
    this.props.submit(() => {
      // console.log("entryForm Data: ", this.props.value)
      // Post the value (which is the value of the ReactAce editor), the 
      // testSuite (which is passed down from where it is requested on the
      // GameFrame) and the algo (which is also on the GameFrame)
      axios.post('/test', {
        value: this.props.value,
        testSuite: this.props.testSuite,
        algo: this.props.algo
      })
      // This sets the result to the response, which causes a re-render, which 
      // renders the results.
      .then((res) => {
        // console.log('RES', res.data.testResults)
        this.setState({ result : res.data });
      });
    });
  }

// On recieve props, we want the state to change
  render() {
    return (
      <div>
        <button className="btn waves-effect waves-light"  onClick={this.onClick}>Submit (will clear code)</button>
        <div>
        <Result sub={this.state.result} />
        </div>
      </div>
    );
  }
}

export default SubmitButton