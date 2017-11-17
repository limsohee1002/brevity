// the following commented out components need to be uncommented once their components are rendered. 
    // When you have finished a component: 
      // uncomment the import
      // uncomment the component on the render screen. 

import React from 'react';
import axios from 'axios';
import Prompt from './Prompt.jsx'; 
import Timer from './Timer.jsx'; 
import CodeEntryForm from './CodeEntryForm.jsx';
import Result from './Result.jsx';

// import Tests from './Tests' // this needs a file
// import Xonsole from './Xonsole' // because 'Console' isn't a reserved word but it should be.
// import RunXonsoleButton from './RunXonsoleButton' // this needs a file

// Recieves props from: 
  // none
// Gives props to: 
  // CodeEntryForm, Submit Button, Timer, Prompt

// This receives the following props from the 'GamesList': 
      // game object with: 
        // algorithm: _id
        // participants
        // leaderboard
        // status
        // playerScores

class GameFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm: null, 
      prompt: null, 
      seedCode: null, 
      testSuite: null,
      value: '', // User's code now managed by this component's state
      timerExpired: false,
      result: {},
      // The below three are not currently being used. 
      isSubmitted: false, 
      isXonsoleRun: false, 
      isTimerRunning: false, 
    };
  
    this.algorithmID = this.props.gameObject.algorithmID;
    this.getAlgorithm = this.getAlgorithm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTimerExpired = this.onTimerExpired.bind(this);
    // this.toggleSubmitStatus = this.toggleSubmitStatus.bind(this);
    // this.toggleRunXonsoleStatus = this.toggleRunXonsoleStatus.bind(this);
    // this.changeTimer = this.changeTimer.bind(this);
  }

  handleChange(value) {
    // console.log('value:', value)
    this.state.value = value;
  }

  onTimerExpired() {
    this.handleSubmit(true);
  }

  // Initial fetch
  getAlgorithm(algoId) {
    axios.get('/algos/' + algoId) 
    .then((response) => {
      this.setState({
        algorithm: response.data,
        prompt: response.data.prompt,
        seedCode: response.data.seedCode,
        value: response.data.seedCode,
        testSuite: response.data.testingSuite
      });
    });
  }

  // Managing user code state here means we can submit at any time, including when timer expires
  // timerExpired is an optional argument used for when the timer actually expires
  handleSubmit(timerExpired = false) {
    let newState = { timerExpired };
    axios.post('/test', {
      value: this.state.value,
      testSuite: this.state.testSuite,
      algo: this.props.gameObject.algorithmID
    })
    .then((response) => {
      newState.result = response.data;
      return axios.post('/users/points', {
        result: newState.result,
        value: this.state.value,
        timerExpired: timerExpired,
        user: this.props.user
      })
      // this.setState({
      //   result: response.data,
      //   timerExpired: timerExpired
      // });
    })
    .then((response) => {
      this.props.setUser(response.data);
      this.setState(newState)
    })
    .catch((error) => {
      this.setState({
        result: { testResults: 'Unable to parse code' },
        timerExpired: timerExpired
      });
    });
  }
  
  // SAM 11/16/2017, Do we actually want to do this?
  // toggleRunXonsoleStatus() {
  //   this.setState({isXonsoleRun : !this.state.isXonsoleRun});
  // }

  // Initial fetch
  componentDidMount() {
    this.getAlgorithm(this.algorithmID);
  }

  render() {
    return (this.state.testSuite === null || this.state.prompt === null || this.state.seedCode === null || this.state.algorithm === null) ? 
    <div className="loading"> Loading Game... </div> : 
    <div className="container">
      <div className="gameview">
        <div className="col s9 container">
          <div className="col s3 container">
            {<Timer onTimerExpired={this.onTimerExpired}/> }
          </div>
          <Prompt 
            promptDetails={this.state.prompt} 
            name={this.props.gameObject.name} />
          <br/>
          <CodeEntryForm 
            seedCode = {this.state.seedCode} 
            testSuite={this.state.testSuite}
            algo={this.props.gameObject.algorithmID}
            value={this.state.value}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            timerExpired={this.state.timerExpired} 
            result={this.state.result}/> 
          <Result result={this.state.result} />
        </div> 
        <div className="inline-block-div"> 
          {/* We aren't using any of these, but you should be able to. 
          <Xonsole toggleRunXonsoleStatus={this.toggleRunXonsoleStatus} isXonsoleRun={this.state.isXonsoleRun}/>
          <RunXonsoleButton toggleRunXonsoleStatus={this.toggleRunXonsoleStatus}/>  
        */}	
        </div>
      </div> 
    </div>
  }
}

export default GameFrame; 
