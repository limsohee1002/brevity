import React from 'react';
import ReactDOM from 'react-dom';
var axios = require('axios');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    // this.handleSomeEvent = this.handleSomeEvent.bind(this);
  }
  //
  // handleSomeEvent(e) {
  //   this.setState({
  //     someState: e.target.value;
  //   })
  // }

  componentDidMount() {
    axios
      .get('/users/:username')
      .then(result => {
        this.setState({
          username: result.username,
          bio: result.bio,
          photourl: result.photourl,
          problems: result.problems
        });
      })
      .catch(err => {
        throw err;
      });
  }

  render(props) {
    return (
      <div>
        <h5>{props.username}</h5>
      </div>
    );
  }
}

export default Profile;
