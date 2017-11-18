import React from 'react';
import axios from 'axios';

class PublicProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      profilePicture: '',
      aboutMe: ''
    };
  }

  componentDidMount() {
    let username = this.props.location.pathname.split('/').pop();
    axios.get(`/profile/${username}`)
    .then((response) => {
      this.setState({
        username: response.data.username,
        profilePicture: response.data.profilePicture,
        aboutMe: response.data.aboutMe
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      this.state.username ?
      <div className="profile_public">
        <img className="circle" src={this.state.profilePicture} alt={this.state.profilePicture}></img>
        <div>
          <h3>{this.state.username}</h3>
          <h4>{this.state.aboutMe}</h4>
        </div>
      </div> :
      <div className="no_user">
        User not found?
      </div>
    );
  }
}

export default PublicProfile;