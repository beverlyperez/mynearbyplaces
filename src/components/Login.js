import React from 'react';
import HomePage from './HomePage';
import { Redirect } from 'react-router-dom';
import './Website.css';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            authenticated: false,
        };

    }

    onSubmit = (event) => {
        if(this.state.username.trim().length > 0){
            this.setState({authenticated: true});
        }
        event.preventDefault();
    }
    
    onInputChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });

    }
  

    render(){
        let from = {pathname: '/', state: {user: this.state.username}}

        if(this.state.authenticated){
            return(<Redirect to={from} />);
        }
        else{
        return (
            <div>
                <form className="onlyForm" onSubmit={this.onSubmit}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="username"
                        value={this.state.username} 
                        onChange={this.handleChange}
                    ></input>
                    <button className="loginButton" type="submit">Login</button>                
                    
                </form>
                
            </div>

        );
        }
    
    
    }

}

export default Login;