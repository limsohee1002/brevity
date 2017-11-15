//codeentryform.js
// this file will just house the code entry. It takes the starterCode from app.js
import React from 'react';
import axios from 'axios'
import brace from 'brace';
import ReactAce from 'react-ace-editor';
import AceEditor from 'react-ace'
import SubmitButton from './SubmitButton.jsx' 
import Timer from './Timer.jsx'

import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';
import 'brace/theme/monokai'

// Recieves props from: 
  // GameFrame, Submit Button, (gets state set by function sent to SubmitButton)
// Gives props to: 
  // Submit Button 


// I would highly recommend against making any changes to this file. 
// ReactAce is very difficult to work with and you may get stuck down a 
// rabbit hole that is not worth your time. 

// SAM 11/14/2017 - I think we can modify the styling of AceEditor, but 
// I agree that maybe we shouldn't modify the base logic too much

class CodeEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitted : false, 
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  // You may be tempted to think I have this backwards and the event should come
  // first, but you would be wrong. This runs everytime the code in the editor
  // changes it does not use setState({}) because doing so would cause the page to 
  // re-render. 
  onChange(newValue, e) {
    const editor = this.ace.editor; // The editor object is from Ace's API
    this.state.value = editor.getValue();
  }

  // this onSubmit is passed down to the submitButton, which triggers the state 
  // of CodeEntryForm to change when the button is pressed. This stateChange 
  // triggers a rerender of the page, which clears the code in the editor but also 
  // rerenders the SubmitButton with the new this.state.value, which has been updating
  onSubmit(cb) {
    this.setState({ submitted : true }, cb);
  }

  render() {
  // console.log('this.props.testSuite in CodeEntryForm', this.props.testSuite)
  // this displays 'loading...' until the seedcode has loaded from the gameFrame. 
  return (this.props.seedCode !== null) ? 
    <div>
        <div className="z-depth-4">
        
          <AceEditor
            mode="javascript"
            theme="monokai"
            setReadOnly= {false}
            onChange={this.onChange}
            value = {this.props.seedCode}
            defaultValue = {this.props.seedCode}
            style={{ height: '400px' }}
            ref={instance => { this.ace = instance; }} // Let's put things into scope
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            enableSnippets={true} />
        </div>
      {/* uhh... this could probably in this file. */}
        <SubmitButton 
         submit={this.onSubmit}
         value={this.state.value}
         testSuite={this.props.testSuite} 
         algo={this.props.algo} 
         bool={this.props.bool}/>
      </div> : <div> Loading... </div>
  }
}

export default CodeEntryForm;