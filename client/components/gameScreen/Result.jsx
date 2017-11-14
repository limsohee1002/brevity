import React from 'react';

// Recieves props from: 
    // SubmitButton
// Gives props to: 
    // none

class Result extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <h6 className="green-text "> Test Passing: {this.props.sub.passing} </h6>
            <h6 className="red-text "> Test Failing: {this.props.sub.failing} </h6>
            
            <br/>
            
            <span className="red-text"> {this.props.sub.testResults} </span>
        </div>
        )
    }
}

export default Result