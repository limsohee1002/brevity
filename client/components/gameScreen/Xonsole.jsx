import React from 'react';
import axios from 'axios'


export class Xonsole extends React.Component {
	// We were never able to flush this out. Essentially the idea was to 
  // improve upon Challenge.Makerpass by creating a console within the 
  // gameFrame that could run a person's code. Some possible resources to 
  // develop this feature include: https://github.com/gf3/sandbox
  // https://github.com/patriksimek/vm2 , https://github.com/remoteinterview/compilebox
  constructor(props) {
		this.state = {
     ableToRun : true, 
    }



	}	

	render() {
    return (
      <div>

      </div>
    )
	}
}

export default Xonsole; 