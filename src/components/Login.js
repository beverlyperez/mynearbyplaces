import React from 'react';
import HomePage from './Homepage';
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