import React from 'react';

// Recieves props from: 
    // SubmitButton
// Gives props to: 
    // none

const Result = (props) => (
  <div>
    <h6 className="green-text "> Tests Passing: {props.result ? props.result.passing || 0: 0} </h6>
    <h6 className="red-text "> Tests Failing: {props.result ? props.result.failing || 0: 0} </h6>
    <br/>    
    <span className="red-text"> {props.result ? props.result.testResults : ''} </span>
  </div>
);

export default Result