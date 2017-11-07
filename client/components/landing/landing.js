import React from 'react';

class Lander extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render(){
        return(
            <div>
                <form>
                    Username:
                    <input type="text" name="firstname"/>
                    Password:
                    <input type="text" name="lastname"/>
                   
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default Lander