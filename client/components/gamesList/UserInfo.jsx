//This is a component which renders some user information at the top of the GamesView page
var React = require('React');
var axios = require('axios');

// Gamesview -> GamesList -> Game
//     \--> UserInfo

export class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  //the props are coming from the GamesView
  render(){
    return(
      <div className = "row">
         <h5 className = "col s4"> Username: {this.props.username} </h5>
         <h5 className = "col s4"> Points: {this.props.points} </h5>
         <h5 className = "col s4"> Level: {this.props.level} </h5>
      </div>
    )
  }
}

export default UserInfo; 