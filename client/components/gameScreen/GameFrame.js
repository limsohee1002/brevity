import React from 'react';
import axios from 'axios'
import Prompt from './Prompt.js'
import CodeEntryForm from './CodeEntryForm.js'
import SubmitButton from './SubmitButton.js'

export class GameFrame extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      prompt : null, 
    }
		// this receives the following props from the 'GamesList': 
			// game object with: 
				// algorithm: _id
				// participants
				// leaderboard
				// status
				// playerScores

		this.getPrompt = async (algoId) {
			// the purpose of this.getPrompt is to take in an algorithm id, 
			// and return the prompt from the algorithm associated with that id. 
		  let local = 'http://localhost:3000'
		  // need to add a process.env variable here. 
		  let extension = '/algos/' + algoId 
 			var retrievedAlgo = await axios.get(local + extension);
 			var prompt = retrievedAlgo.prompt
			this.setState({prompt})
		}
		componentWillMount() {
			// on the first mounting of the game frame, we want to render the game. 
			this.getPrompt()

		}	
	}

	render(props){
		return (
			<div>
				<Timer />
				<Prompt promptdetails={this.state.prompt} />
				<CodeEntryForm />
				<SubmitButton />
			</div>
		)
	}
}

export default GameFrame; 