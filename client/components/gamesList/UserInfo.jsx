//This is a component which renders some user information at the top of the GamesView page
import React from 'react';
import { Route, browserHistory } from 'react-router';
import { Link, IndexRoute, BrowserRouter as Router } from 'react-router-dom';

// Gamesview -> GamesList -> Game
//     \--> UserInfo

const UserInfo = props => (
  <div className="row z-depth-2" id="userinfo">
    <h5 className="col s3">
      User:
      <Link
        className="username"
        to={{
          pathname: `/profile/${props.username}`,
          state: { username: props.username }
        }}>
        {props.username}
      </Link>
    </h5>
    <h5 className="col s3">Points: {props.points}</h5>
    <h5 className="col s3">Level: {props.level}</h5>
  </div>
);

export default UserInfo;
