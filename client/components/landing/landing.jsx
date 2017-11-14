import React from 'react';
import AlertContainer from 'react-alert'
var axios = require('axios');

class Lander extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // these are just for the sign-up.
      username: "",
      password: "",
      signUpError : "", 

      // these are for the log-in
      usernameToCheck : "", 
      passwordToCheck : "", 
      logInError : "", 

    }

    // these are just for sign-up
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleAdd = this.handleAdd.bind(this)


    // these are for the log-in
    this.handleUsernameToCheck = this.handleUsernameToCheck.bind(this)
    this.handlePasswordToCheck = this.handlePasswordToCheck.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }



// THESE ARE JUST FOR THE SIGN UP. 
  //handle username submission and updates state
  handleUsername(event) {
    this.setState({
      // this gets the username from the form. 
      username: event.target.value
    })
  }

  //handle password submission and updates state
  handlePassword(e) {
    this.setState({
      // this gets the password from the form. 
      password: e.target.value
    })
  }

  // handle axios request.
  handleAdd(e) {
    // this only going to be able to check whether the user already
    // has an account. Need to create a new component for adding a user. 
    e.preventDefault(); 
    axios.post('/users', {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      if (response.data.error === undefined) {
        // this changes the state of the main.js this.state.user and triggers a rerender.
        alert('Signed Up Successfully!')
        
        this.props.setUser(this.state.username) 
      } else {
        this.setState({signUpError : response.data.error})
      }
    }) 
    .catch(function (error) {
      this.props.setUser('no')
    })
  }

// THESE ARE TO MANAGE THE LOG-IN
  handleUsernameToCheck(e) {
    this.setState({
      // this gets the username from the form. 
      usernameToCheck: e.target.value
    })
  }

  //handle password submission and updates state
  handlePasswordToCheck(e) {
    this.setState({
      // this gets the password from the form. 
      passwordToCheck: e.target.value
    })
  }

  handleCheck(event) {
    event.preventDefault();
    // post instead of get so that we can send input data 
    axios.post('/users/auth', {
      username: this.state.usernameToCheck,
      password: this.state.passwordToCheck
    })
    .then((response) => {
      if (response.data.error === undefined) {
        // we only set the user if the response is not an error
        // because the user being not null determines whether the
        // the gamesView page loads.
        alert('Signed In Successfully!') 
        this.props.setUser(this.state.usernameToCheck)
      } else {
        this.setState({logInError : response.data.error})
      }
    })
    .catch((err) => {
      console.error(err)
    })
  }



  render(){

    return(
        <div>
          <div className="container">
            <form>
            <i className="material-icons prefix">account_circle</i>
              
              <input type="text" value={this.state.username} onChange={this.handleUsername} placeholder="Username" />
              <i className="material-icons prefix">edit</i>
              <input type="password" value={this.state.password} onChange={this.handlePassword} placeholder="Password"/>
              <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleAdd}>
              Sign Up
                <i className="material-icons right">send</i>
              </button>
            </form>
            <span className="red-text "> {this.state.signUpError} </span>
          </div> 

          <div className="container">
          
            <form>
              <i className="material-icons prefix">account_circle</i>
              <input type="text" value={this.state.usernameToCheck} onChange={this.handleUsernameToCheck} placeholder="Username" />
              
              <i className="material-icons prefix">edit</i>
              <input type="password" value={this.state.passwordToCheck} onChange={this.handlePasswordToCheck} placeholder="Password"/>
              <button className="btn waves-effect waves-light " type="submit" name="action" onClick={this.handleCheck}>
                Log In
                <i className="material-icons right">send</i>
              </button>
            </form> 
         
            <span className="red-text "> {this.state.logInError} </span>
          </div>
        </div>
    )
  }

}

export default Lander