import React from 'react';
import { Link } from 'react-router-dom';
import './Website.css';

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
        };

    }


    render(){
        return (
            <div className="test">
                
                
                <p>My Nearby Places</p>
            </div>
        );

    }

}

export default Homepage;

