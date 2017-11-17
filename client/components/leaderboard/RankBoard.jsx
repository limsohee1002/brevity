import React from 'react';


class RankBoard extends React.Component {
  constructor(props) {
    super(props)
  };
  

  render() {
    return(
      <div>
        <div className="wrapper">
          <h5 className="name">user name</h5>
          <h5 className="points">total points</h5>
          <h5 className="history">completed games</h5>
        </div>
        {this.props.allUsers.map((data, i) => <div key={data._id} className="innerwrapper">
            <div key={data._id + 'profilePicture'} className="profilePicture">
            <img src={data.profilePicture}/>
            </div>
            <div key={data._id + 'name'} className="name">
              {data.username}
            </div>
            <div key={data._id + 'points'} className="points">
              {data.totalPoints}
            </div>
            <div key={data._id + 'history'} className="history">
              {data.gameHistory.length}
            </div>
          </div>)}
      </div>
    )
  }
}
export default RankBoard;


