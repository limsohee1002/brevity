import React from 'react';

const RankBoard = (props) => (
  <div className="outerwrapper">
    <div className="wrapper">
      <h5 className="name">user name</h5>
      <h5 className="points">total points</h5>
      <h5 className="history">game history</h5>
    </div>
    {props.allUsers.map((data, i) => 
      <div key={data.id} className="innerwrapper">
        <div key={data.id + 'name'} className="name">
          {data.username}
        </div>
        <div key={data.id + 'points'} className="points">
          {data.totalPoints}
        </div>
        <div key={data.id + 'history'} className="history">
          {data.gameHistory}
        </div>
      </div>)}
  </div>
);

export default RankBoard;


