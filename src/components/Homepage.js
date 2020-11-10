import React from 'react';
import { Link } from 'react-router-dom';

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
                
                <input type="text" className="input" placeholder="Search..." />
                <div className="loginButton">
                    {this.state.authenticated ? this.state.username : <Link to='/login'>Login</Link>}
                </div>
                <p>My Nearby Places</p>
            </div>
        );

    }

}

export default Homepage;