import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Link, Switch } from 'react-router-dom'

const NavBar = (props) => (
  <nav className="nav">
    <div className="container">
      <div className="nav-wrapper">
        <h5 className="brand-logo">Brevity</h5>
      </div>
    </div>
    <ul className="nav-button nav-list">
      <li><Link to='/gameList'>Code!</Link></li>
      <li><Link to='/leaderboard'>Leaderboard</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
      <li id="logout" onClick={props.logout}><Link to='/'>Log out</Link></li>
    </ul>
  </nav>
);

export default NavBar;
