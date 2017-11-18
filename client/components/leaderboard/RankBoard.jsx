import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Link, Switch } from 'react-router-dom';

const RankBoard = (props) => (
  <div className="outerwrapper">
    <div className="wrapper">
      <h5 className="name">user name</h5>
      <h5 className="points">total points</h5>
      <h5 className="history">game history</h5>
    </div>
    {props.filteredUsers.map((data, i) => 
      <div key={data._id} className="innerwrapper">
        <div key={data._id + 'name'} className="name">
          <Link to={`/public/${data.username}`}>{data.username}</Link>
        </div>
        <div key={data._id + 'points'} className="points">
          {data.totalPoints}
        </div>
        <div key={data._id + 'history'} className="history">
            {data.gameHistory}
        </div>
      </div>)}
  </div>
);
export default RankBoard;


