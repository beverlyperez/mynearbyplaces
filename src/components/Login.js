import React from 'react';
import HomePage from './HomePage';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            showHomePage: false,
            signedIn: false
        };

    }

    onSubmit = (event) => {
        if(this.state.username.trim().length > 0){
            this.setState({signedIn: true});
        }
        event.preventDefault();
        

    }
    
    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });

    }
  

    render(){
        if((!this.state.signedIn) && (!this.state.showHomePage)){
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
        return (
            <div>
                <div className="greeting">
                <p>Welcome  </p>
                <p>{this.state.username}</p>  
                <p>!</p>

                </div>
                <HomePage />
            </div>

        );
    }

}

export default Login;