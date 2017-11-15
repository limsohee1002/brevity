import React from 'react';

// Recieves props from: 
    // SubmitButton
// Gives props to: 
    // none

const Result = (props) => (
  <div>
    <h6 className="green-text "> Tests Passing: {props.sub.passing || 0} </h6>
    <h6 className="red-text "> Tests Failing: {props.sub.failing || 0} </h6>
    <br/>    
    <span className="red-text"> {props.sub.testResults} </span>
  </div>
);

export default Result