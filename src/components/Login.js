import React from 'react';
import HomePage from './HomePage';
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

export default Login;