import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Link, Switch } from 'react-router-dom';

const RankBoard = (props) => (
  <div className="outerwrapper">
    <div className="wrapper">
      <h6 className="name">Username</h6>
      <h6 className="points">Points</h6>
      <h6 className="history">Completed</h6>
    </div>
    {props.filteredUsers.map((data, i) => 
      <div key={data._id} className="innerwrapper">
        <div key={data._id + 'photo'} className="profile_picture">
          <img src={data.profilePicture} alt={data.username} />
        </div>
        <div key={data._id + 'name'} className="name truncate">
          <Link to={`/profile/${data.username}`}>{data.username}</Link>
        </div>
        <div key={data._id + 'points'} className="points">
          {data.totalPoints}
        </div>
        <div key={data._id + 'history'} className="history">
            {data.gameHistory.length}
        </div>
      </div>)}
  </div>
);
export default RankBoard;


