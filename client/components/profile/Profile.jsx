import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: this.props.user.username,
      aboutMe: this.props.user.aboutMe,
      profilePicture: ''
    };
    this.updateProfile = this.updateProfile.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	updateProfile(e) {
		e.preventDefault();
		var updatedProfile = {
			name: this.state.username,
			aboutMe: this.state.aboutMe,
			profilePicture: this.state.profilePicture
		};
		axios.put(`/users/${this.props.user.username}`, updatedProfile)
      .then(res => {
        this.props.setUser(res.data)
		});
	}

  render(props) {
    return (
      <div className="profile_summary">
        <div className="profile-pic">
          <img src={this.props.user.profilePicture}/>
        </div>
        <div className="forms">
          <form>
            <label>Username</label>
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />

            <label>About Me</label>
            <input
              name="aboutMe"
              type="text"
              value={this.state.aboutMe}
              onChange={this.handleInputChange}
            />
            <label>Upload Photo</label>
            <input
              name="profilePicture"
              type="text"
              value={this.state.profilePicture}
              onChange={this.handleInputChange}
            />
          </form>
          <input
            type="submit"
            value="Update"
            onClick={this.updateProfile}
          />
        </div>
      </div>
    );
  }
}

export default Profile;
