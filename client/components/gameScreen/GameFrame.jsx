// the following commented out components need to be uncommented once their components are rendered. 
    // When you have finished a component: 
      // uncomment the import
      // uncomment the component on the render screen. 

import React from 'react';
import axios from 'axios';
import Prompt from './Prompt.jsx'; 
import Timer from './Timer.jsx'; 
import CodeEntryForm from './CodeEntryForm.jsx'
// import Tests from './Tests' // this needs a file
// import Xonsole from './Xonsole' // because 'Console' isn't a reserved word but it should be.
// import RunXonsoleButton from './RunXonsoleButton' // this needs a file
import SubmitButton from './SubmitButton.jsx' // this needs a file

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
    console.log(props)
    this.state = {
      algorithm: null, 
      prompt: null, 
      seedCode: null, 
      testSuite: null, 
      timerbool: false,
      // The below three are not currently being used. 
      isSubmitted: false, 
      isXonsoleRun: false, 
      isTimerRunning: false, 
    };
  // console.log('gameObject', this.props.gameObject)
  
    this.algorithmID = this.props.gameObject.algorithmID;
    this.getAlgorithm = this.getAlgorithm.bind(this);
    this.getSeedCode = this.getSeedCode.bind(this);
    this.getTests = this.getTests.bind(this);
    this.toggleSubmitStatus = this.toggleSubmitStatus.bind(this);
    this.toggleRunXonsoleStatus = this.toggleRunXonsoleStatus.bind(this);
    this.changeTimer = this.changeTimer.bind(this);
  }

  //JSC 11-15-17 
  // submitTimer() {
  //   axios.get('/timer' + )
  //   .then()
  // }
  changeTimer() {
    this.setState({timerbool:true})
  }

  getAlgorithm(algoId, cb) {
    axios.get('/algos/' + algoId) 
    .then((algorithm) => {
      this.setState({
        algorithm : algorithm.data
      });
      // run the response in a callback so that other functions can use it. 
      // so far, getPrompt, getSeedCode, and getTests all use this. 
      if (cb) {
        cb(algorithm.data)
      }; 
    });
  }

  // these could be refactored into one function, but I think it is more readable to have them seperate. 
  getPrompt(algoId) {
    this.getAlgorithm(algoId, (algo) => {
      var prompt = algo.prompt;
      this.setState({ prompt });
    });
  }

  getSeedCode(algoId) {
    this.getAlgorithm(algoId, (algo) => {
      var seedCode = algo.seedCode;
      this.setState({ seedCode });
    });
  }

  getTests(algoId) {
    this.getAlgorithm(algoId, (algo) => {
      var testSuite = algo.testingSuite;
      this.setState({ testSuite });
    });
  }

  // both of these functions handle the pressing of the buttons. When they are pressed, they change the state
  // of the GameFrame, triggering a rerendering and passing down a true value to their respective children. 
  // NIETHER OF THESE ARE BEING USED CURRENTLY, BUT PROBABLY SHOULD BE.
  toggleSubmitStatus() {
    this.setState({isSubmitted : !this.state.isSubmitted});
  }
  toggleRunXonsoleStatus() {
    this.setState({isXonsoleRun : !this.state.isXonsoleRun});
  }

  componentWillMount() {
    // on the first mounting of the game frame, we want to render the game. 
    this.getAlgorithm(this.algorithmID);
    this.getPrompt(this.algorithmID);
    this.getSeedCode(this.algorithmID);
    this.getTests(this.algorithmID);
  }

  render(props){
    // console.log('this.state.testSuite', this.state.testSuite)
    // loading screen shows until state is updated completely. 
    return (this.state.testSuite === null || this.state.prompt === null || this.state.seedCode === null || this.state.algorithm === null) ? 
    <div> Loading Game... </div> : 
    <div className="row">
       <div className="container">
        <div className="row">
        <button onClick={this.props.onBack}>Back</button>
          <div className="col s9 container ">
            <Prompt 
              promptDetails={this.state.prompt} 
              name={this.props.gameObject.name} />
            <br/>
            <CodeEntryForm 
              seedCode = {this.state.seedCode} 
              testSuite={this.state.testSuite}
              algo={this.props.gameObject.algorithmID}
              bool={this.state.timerbool} /> 
          </div> 
          <div className="col s3 container">
            {<Timer bool={this.changeTimer}/> }
          </div>
          <div className="inline-block-div"> 
            {/* We aren't using any of these, but you should be able to. 
            <Xonsole toggleRunXonsoleStatus={this.toggleRunXonsoleStatus} isXonsoleRun={this.state.isXonsoleRun}/>
            <RunXonsoleButton toggleRunXonsoleStatus={this.toggleRunXonsoleStatus}/>  
          */}	
          </div>
        </div> 
      </div>
    </div>
  }
}

export default GameFrame; 