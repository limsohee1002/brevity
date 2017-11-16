import React from 'react';


class RankBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  };
  

  render() {
    return(
      <div className="wrapper">
        <h4 className="name">user name</h4>
        <h4 className="points">total points</h4>
        <h4 className="history">game history</h4>
        <div className="name">
        {this.props.allUsers.map((data) => <div>{data.username}</div>)}
        </div>
        <div className="points">
        {this.props.allUsers.map((data) => <div>{data.totalPoints}</div>)}
        </div>
        <div className="history">
        {this.props.allUsers.map((data) => <div>{data.gameHistory}</div>)}
        </div>
      </div>
    )
  }
}
export default RankBoard;


