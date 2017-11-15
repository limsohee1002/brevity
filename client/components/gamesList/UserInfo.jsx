//This is a component which renders some user information at the top of the GamesView page
import React from 'react';

// Gamesview -> GamesList -> Game
//     \--> UserInfo

const UserInfo = (props) => (
  <div className="row">
     <h5 className="col s4">Username: {props.username}</h5>
     <h5 className="col s4">Points: {props.points}</h5>
     <h5 className="col s4">Level: {props.level}</h5>
  </div>
);

export default UserInfo; 