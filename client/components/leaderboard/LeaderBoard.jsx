import React from 'react';
import axios from 'axios';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers: []
    }
  };
  componentDidMount() {
    axios.get('/users').then((res) => {
      let users = res.data.sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 100)
      this.setState({allUsers: users})
    }).catch((err) => console.log('user fetch error'))
  }

  render() {
    return(
      <div class="wrapper">
        <div class="name">user name</div>
        <div class="points">total points</div>
        <div class="history">game history</div>
        <div class="name">
        {this.state.allUsers.map((data) => <div>{data.username}</div>)}
        </div>
        <div class="points">
        {this.state.allUsers.map((data) => <div>{data.totalPoints}</div>)}
        </div>
        <div class="history">
        {this.state.allUsers.map((data) => <div>{data.gameHistory}</div>)}
        </div>
      </div>
    )
  }
}
export default LeaderBoard; 


