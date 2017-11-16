import React from 'react';
import RankBoard from './RankBoard.jsx';
import axios from 'axios';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers: [],
      defaultPhoto: 'https://harvardgazette.files.wordpress.com/2017/03/mark-zuckerberg-headshot-11.jpg',
      userRank: null
    }
  };

  componentDidMount() {
    axios.get('/users').then((res) => {
      let users = res.data.sort((a, b) => b.totalPoints - a.totalPoints)
      this.setState({allUsers: users})
    }).catch((err) => console.log('user fetch error'))
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
      <div>
        <div className="myRank">
          <div className="profile-pic">
            {this.props.profilepic ? <img src={this.props.profilepic}/> : <img src={this.state.defaultPhoto}/>}
          </div>
          <h3>{this.props.user.username}</h3>
          <h4>your ranking is:</h4>
          <div>
            {this.state.allUsers.length > 0 ? this.getUserRank() : 'loading'}
          </div>
        </div>
        <RankBoard allUsers={this.state.allUsers}/>
      </div>
    )
  }
}
export default LeaderBoard; 


