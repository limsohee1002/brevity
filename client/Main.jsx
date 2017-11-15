import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Landing from './components/landing/Landing.jsx';
import GamesView from './components/gamesList/GamesView.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//all components will be attached to this Page component.
//Page component will be rendered to the html file
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  setUser(user) {
    this.setState({ user });
  }

  logout() {
    axios.get('/logout')
    .then((response) => {
      this.setState({ user: null });
    })
    .catch((error) => {
      this.setState({ user: null });
    });
  }

  render(props) {
    // only render the gamesView if this.state.user is defined.
    // this.state.user gets defined by the setUser function in Lander.
    return this.state.user === null ? (
      <h6>
        <Landing setUser={this.setUser} />
      </h6>
    ) : (
      <BrowserRouter> 
      <div>
        <button onClick={this.logout}>Log out</button>
        <GamesView user={this.state.user} />
      </div>
    </BrowserRouter>
    );
    // return (
    //   <Router>
    //     <div>
    //       <ul>
    //         <li>
    //           <Link to="/">Signup/Signin</Link>
    //         </li>
    //         <li>
    //           <Link to="/games">Games</Link>
    //         </li>
    //         <li>
    //           <Link to="/profile/:id">Profile</Link>
    //         </li>
    //       </ul>
    //
    //       <hr />
    //
    //       <Route exact path="/" component={Lander} />
    //       <Route path="/games" component={GamesView} />
    //       <Route path="/profile/:id" component={Profile} />
    //     </div>
    //   </Router>
    // );
  }
}

ReactDOM.render(<Page />, document.getElementById('mount'));
