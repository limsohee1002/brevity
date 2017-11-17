import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      defaultPhoto: 'https://harvardgazette.files.wordpress.com/2017/03/mark-zuckerberg-headshot-11.jpg'
    }

    // this.setUser = this.setUser.bind(this);
  }
  //
  // handleSomeEvent(e) {
  //   this.setState({
  //     someState: e.target.value;
  //   })
  //
  //
  // setUser(user) {
  //   this.setState({ user });
  // }

  componentDidMount() {
    console.log('SHOULD BE USER HERE: ', this.props.user.username);
    axios
      .get(`/users/${this.props.user.username}`)
      .then(res => {
        console.log('res.data', res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log('user fetch error');
      });
  }


  	handleInputChange(event) {
  		this.setState({ [event.target.name]: event.target.value });
  	}

  	submitProfile(e) {
  		e.preventDefault();
  		var newProfile = {
  			name: this.state.name,
  			origin: this.state.origin,
  			previously: this.state.previously,
  			interests: this.state.interests,
  			experience: this.state.experience,
  			fact1: this.state.fact1,
  			fact2: this.state.fact2,
  			fact3: this.state.fact3,
  			photourl: this.state.photourl
  		};
  		axios.post('/profiles', newProfile).then(res => {
  			alert('Created');
  		});
  	}

  render(props) {
    return (
      <div className="profile_summary">
        <div className="profile-pic">
          {this.props.user.profilePicture ? <img src={this.props.user.profilePicture}/> : <img src={this.state.defaultPhoto}/>}
        </div>

        <div className="forms">
          <form>
            <label>Name </label>
            <br />
            <input
              name="name"
              type="text"
              value={this.props.user.username}
              onChange={this.handleInputChange}
            />
            <br />

            <label>About Me </label>
            <br />
            <input
              name="origin"
              type="text"
              value={this.props.user.aboutme}
              onChange={this.handleInputChange}
            />
            <br />
            <label>Upload Photo</label>
            <br />
            <input
              name="photourl"
              type="text"
              value={this.state.photourl}
              onChange={this.handleInputChange}
            />
          </form>
          <input
            type="submit"
            value="Update"
            onClick={this.submitProfile}
          />
        </div>
      </div>
    );
  }
}

export default Profile;
