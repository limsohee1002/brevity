//codeentryform.js
// this file will just house the code entry. It takes the starterCode from app.js
import React from 'react';
import axios from 'axios'
import brace from 'brace';
import ReactAce from 'react-ace-editor';
import SubmitButton from './SubmitButton.js' 

import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';
import 'brace/theme/monokai'

export class CodeEntryForm extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        value: ""
      }
      this.onChange = this.onChange.bind(this);
  }
  onChange(newValue,e) {
  
    const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(editor.getValue());
    this.setState({value : editor.getValue()})
    event.preventDefault();
  }

  render() {
    console.log('SEEEEEEEED CODE' + this.props.seedCode)
  
    return (
      <div>
        <div>
        <ReactAce
        mode="javascript"
        theme="eclipse"
        setReadOnly= {false}
        onChange={this.onChange.bind(this)}
        style={{ height: '100px' }}
        ref={instance => { this.ace = instance; }} // Let's put things into scope
    
      />
        </div>
        <SubmitButton value={this.state.value}/>
      </div>
    )
  }
}

export default CodeEntryForm;