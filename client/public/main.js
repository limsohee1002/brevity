import React from 'react';
import ReactDOM from 'react-dom';
import Lander from '../components/landing/landing.js';


//all components will be attached to this Page component. 
//Page component will be rendered to the html file
class Page extends React.Component {
    render(){
        return(
            <h2>
            <Lander />
            </h2>
        )
    }

}

ReactDOM.render(<Page />, document.getElementById('mount'))    
