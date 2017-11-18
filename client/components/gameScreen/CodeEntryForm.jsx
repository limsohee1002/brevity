//codeentryform.js
// this file will just house the code entry. It takes the starterCode from app.js
import React from 'react';
import brace from 'brace';
import ReactAce from 'react-ace-editor';
import AceEditor from 'react-ace'
import axios from 'axios';

import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';
import 'brace/theme/monokai'

// Must be a class, because ref is required for the ace editor
class CodeEntryForm extends React.Component {
  constructor(props) {
    super(props);
    // hacky way to preserve value AND submit after timer expires
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // newValue and e are emitted by Ace editor, but all we want is the value
  onChange(newValue, e) {
    const editor = this.ace.editor; // The editor object is from Ace's API
    this.props.handleChange(editor.getValue());
  }

  // sendPoints() {
  //   axios.post('/users/points', {
  //     value: this.props.value, 
  //     timerExpired: this.props.timerExpired,
  //     result: this.props.result
  //   })
  //   .then((response) => {
  //     this.setState({result: response.data,
  //     timerExpired: timerExpired})
  //   }) 
  //   .catch((error) => {
  //     console.error(error)
  //   })
  // }
  // Handle button submit
  onSubmit(cb) {
    this.props.handleSubmit(this.props.gameName);
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
            readOnly={this.props.timerExpired}
            onChange={this.onChange}
            value={this.props.value}
            style={{ width: '100%', height: '400px' }}
            ref={(ref) => { this.ace = ref; }} // Let's put things into scope
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            enableSnippets={true}
            tabSize={2} />
          </div>
        <button className="btn waves-effect waves-light" disabled={this.props.timerExpired} 
          onClick={this.onSubmit}>Submit</button>
      </div> : <div className="loading"> Loading... </div>
  }
}

export default CodeEntryForm;