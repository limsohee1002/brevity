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
        <div className="name">user name</div>
        <div className="points">total points</div>
        <div className="history">game history</div>
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


