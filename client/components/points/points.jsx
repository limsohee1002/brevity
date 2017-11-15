import React from 'react';
import axios from 'axios';
var pointsAlgo = require('./pointsAlgo.js');


class Points extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
    <h1>Your Score: {this.props.points}</h1>
    )
  }

}