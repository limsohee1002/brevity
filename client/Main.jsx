import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Lander from './components/landing/Landing.jsx';
import GamesView from './components/gamesList/GamesView.jsx';
import Profile from './components/profile/Profile.jsx';
//all components will be attached to this Page component.
//Page component will be rendered to the html file
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({ user });
  }

  render(props) {
    // only render the gamesView if this.state.user is defined.
    // this.state.user gets defined by the setUser function in Lander.
    return this.state.user === null ? (
      <h6>
        <Lander setUser={this.setUser} />
      </h6>
    ) : (
      <div>
        <GamesView user={this.state.user} />
      </div>
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
