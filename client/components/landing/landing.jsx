import React from 'react';
import AlertContainer from 'react-alert'
var axios = require('axios');

class Lander extends React.Component {
  constructor(props) {
    super(props);
    // SAM 11/14/2017 - Consolidate this state, this could be handled together, methinks.
    // Similar to the way we decided to handle Bestpin login
    this.state = {
      // These are just for the sign-up.
      username: '',
      password: '',
      signUpError : '', 

      // These are for the log-in
      usernameToCheck : '', 
      passwordToCheck : '', 
      logInError : '', 
    };

    // These are just for sign-up
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleAdd = this.handleAdd.bind(this)

    // These are for the log-in
    this.handleUsernameToCheck = this.handleUsernameToCheck.bind(this)
    this.handlePasswordToCheck = this.handlePasswordToCheck.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

// THESE ARE JUST FOR THE SIGN UP. 
  // Handle username submission and updates state, gets username from form
  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  // Handle password submission and updates state, gets password from form
  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  // Handle axios request.
  handleAdd(e) {
    // This only going to be able to check whether the user already
    // has an account. Need to create a new component for adding a user. 
    e.preventDefault(); 
    axios.post('/users', {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      if (response.data.error === undefined) {
        // This changes the state of the main.js this.state.user and triggers a rerender.
        // alert('Signed Up Successfully!')
        this.props.setUser(this.state.username);
      } else {
        this.setState({signUpError : response.data.error});
      }
    }) 
    .catch((error) => {
      this.props.setUser('no');
    });
  }

// THESE ARE TO MANAGE THE LOG-IN
  // Gets username from form
  handleUsernameToCheck(e) {
    this.setState({
      usernameToCheck: e.target.value
    });
  }

  // Handle password submission and updates state
  handlePasswordToCheck(e) {
    this.setState({
      // This gets the password from the form. 
      passwordToCheck: e.target.value
    });
  }

  handleCheck(e) {
    e.preventDefault();
    // Post instead of get so that we can send input data 
    axios.post('/users/auth', {
      username: this.state.usernameToCheck,
      password: this.state.passwordToCheck
    })
    .then((response) => {
      if (response.data.error === undefined) {
        // We only set the user if the response is not an error
        // because the user being not null determines whether the
        // the gamesView page loads.
        // alert('Signed In Successfully!') 
        this.props.setUser(this.state.usernameToCheck);
      } else {
        this.setState({ logInError: response.data.error });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <form>
            <i className="material-icons prefix">account_circle</i>
            <input type="text" value={this.state.username} onChange={this.handleUsername} placeholder="Username"/>
            <i className="material-icons prefix">edit</i>
            <input type="password" value={this.state.password} onChange={this.handlePassword} placeholder="Password"/>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleAdd}>
              Sign Up
              <i className="material-icons right">send</i>
            </button>
          </form>
          <span className="red-text">{this.state.signUpError}</span>
        </div> 

        <div className="container">
          <form>
            <i className="material-icons prefix">account_circle</i>
            <input type="text" value={this.state.usernameToCheck} onChange={this.handleUsernameToCheck} placeholder="Username"/>
            <i className="material-icons prefix">edit</i>
            <input type="password" value={this.state.passwordToCheck} onChange={this.handlePasswordToCheck} placeholder="Password"/>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleCheck}>
              Log In
              <i className="material-icons right">send</i>
            </button>
          </form> 
          <span className="red-text">{this.state.logInError}</span>
        </div>
      </div>
    );
  }
}

export default Lander