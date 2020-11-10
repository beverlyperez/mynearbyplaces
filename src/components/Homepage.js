import React from 'react';
import { Link } from 'react-router-dom';
import './Website.css';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: ''
        };

    }

    render(){
        return (
            <div>
                <p>My Nearby Places</p>
                <div className="loginButton">
                    {this.state.authenticated ? this.state.username : <Link to='/login'>Login</Link>}
                </div>
                
            </div>
        );

    }

}

export default HomePage;

