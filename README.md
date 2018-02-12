# brevity
Coding challenge platform based on speed and accuracy

![brevity-demo](https://user-images.githubusercontent.com/30321742/36118250-60fe683e-100a-11e8-87ee-774dffcac0e5.gif)

## Code Example

#### user input test

```JS
handleSubmit(timerExpired = false) {
    let newState = { timerExpired };
    axios.post('/test', {
      value: this.state.value,
      testSuite: this.state.testSuite,
      algo: this.props.gameObject.algorithmID
    })
    .then((response) => {
      newState.result = response.data;
      if (!timerExpired && Number(newState.result.failing) !== 0) {
        this.setState(newState);
        return false;
      } else  {
        newState.isComplete = true;
        return this.props.user.gameHistory.includes(this.props.gameObject.name) ? false :
        axios.post('/users/points', {
          result: newState.result,
          value: this.state.value,
          timerExpired: timerExpired,
          user: this.props.user,
          length: this.props.gameObject.lenth
        });
      }
    })
    .then((response) => {     
      if (response === false) { return response; }
      let user = response.data;
      return axios.put('/gamehistory', { params: { username: this.props.user.username, gamename: this.props.gameObject.name } });
    })
    .then((response) => {
      let callback = () => this.props.setUser(response.data);
      response === false ? this.setState(newState) : this.setState(newState, callback);
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        result: { testResults: 'Unable to parse code' },
        timerExpired: timerExpired
      });
    });
  }

```
#### Searching functionality

```JS
  onChange(e) {
    let newSearch = e.target.value;
    let newUsers = this.state.allUsers.filter((a) => a.username.includes(newSearch));
    this.setState({
      filteredUsers: newUsers,
      currentSearch: newSearch
    });
  }
```

## Running locally
in terminal
```
1. npm install
2. npm run react-dev
3. npm start
```
now go to http://localhost:3000/

## Live Website
http://hrbrevity.herokuapp.com/

## Tech Stack
* Javascript
* React
* React Router
* MongoDB
* Mongoose
* Axios
* Express
* Node.js
* Mocha
* Ace Editor
* Countdown Clock
* Bycript

## Authors
* Sohee Lim
* Samuel Kwak
* Yusaky Kasahara
* Jimmy Sandrs-Cannon

## License
This project is licensed under the MIT License
