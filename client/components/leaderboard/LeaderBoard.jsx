import React from 'react';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers: null
    }
  };
  render() {
    return(
      <div>
        {this.state.allUsers.map((user) => {})}
      </div>
    )
  }
}
export default LeaderBoard; 


