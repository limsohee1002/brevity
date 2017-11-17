import React from 'react';
import RankBoard from './RankBoard.jsx';
import axios from 'axios';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      defaultPhoto: 'https://harvardgazette.files.wordpress.com/2017/03/mark-zuckerberg-headshot-11.jpg',
      userRank: null
    };
  };

  componentDidMount() {
    axios.get('/users').then((res) => {
      let users = res.data.sort((a, b) => b.totalPoints - a.totalPoints)
      this.setState({
        allUsers: users
      });
    }).catch((error) => {
      console.log('user fetch error', error)
    });
  }

  getUserRank() {
    for (var i = 0; i < this.state.allUsers.length; i++) {
      if (this.state.allUsers[i].username === this.props.user.username) {
        return i + 1;
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }

  render() {
    return(
      <div className="myRank">
        <div className="profile-pic">
          <img src={this.props.user.profilePicture}/>
          <div>
            <h3>{this.props.user.username}</h3>
            <h4>your rank is: {this.state.allUsers.length > 0 ? this.getUserRank() : 'loading'}</h4>
          </div>
        </div>
        <RankBoard allUsers={this.state.allUsers}/>
      </div>
    );
  }
}
export default LeaderBoard; 


