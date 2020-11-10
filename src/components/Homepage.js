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

    activateStateC = (event) => {
        if(!this.state.quizCnCart){
            this.setState({quizCnCart: true});
            this.setState({results: false});

        }
        event.preventDefault();
    
    }
    
    onSubmit = (currentState) => {
        var amountCorrect = 0;          
        for(var i = 1; i <= 6; i++) {
            var radios = document.getElementsByName('q'+i);
            for(var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if(radio.value == "correct" && radio.checked) {
                    amountCorrect++;
                }
            }
            
        }

        this.setState({amountC: amountCorrect});
        console.log(this.state.amountC + " this is the amount correct");
        if(currentState == "cartoons"){
            this.setState({quizCnCart: false});
        }
        else if(currentState == "videog"){
            this.setState({quizVideoG: false});
        }
        else if(currentState == "halloween"){
            this.setState({quizHall: false});
        }
        this.setState({results: true});

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

