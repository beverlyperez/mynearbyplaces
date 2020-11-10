import React from 'react';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quizCnCart: false,
            quizHall: false,
            quizVideoG: false, 
            results: false,
            amountC: 0
        };

    }

    
    activateStateC = (event) => {
        if(!this.state.quizCnCart){
            this.setState({quizCnCart: true});
            this.setState({results: false});

        }
        event.preventDefault();
    
    }

    EmptyAll = (event) => {
        this.setState({quizCnCart: false});
        this.setState({quizHall: false});
        this.setState({quizVideoG: false});
        this.setState({results: false});
        this.setState({amountC: 0});
        event.preventDefault();
    }

    restartCnCart = (event) => {
        if(!this.state.quizCnCart){
            this.setState({results: false});

            this.setState({quizCnCart: true});
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
                <div className="CNQ">
                    <h1>Which cartoon show from Cartoon Network, does the picture show?</h1>
                    <form id="quiz">
                        
                        <input id="a1" type="radio" name="q1" value="wrong"/>
                        <label for="a1">Billy and Mandy</label><br></br>
                        <input id="a2" type="radio" name="q1" value="correct"/>
                        <label for="a2">Codename: Kids Next Door</label><br></br>
                        <input id="a3" type="radio" name="q1" value="wrong"/>
                        <label for="a3">Power Puff Girls</label><br></br>
                        <input id="a4" type="radio" name="q1" value="wrong"/>
                        <label for="a4">Drake and Josh</label><br></br><br></br><br></br>

                        <input id="a5" type="radio" name="q2" value="wrong"/> 
                        <label for="a5">The Heroes of Townsville</label><br></br>
                        <input id="a6" type="radio" name="q2" value="wrong"/>
                        <label for="a6">Supers</label><br></br>
                        <input id="a7" type="radio" name="q2" value="wrong"/>
                        <label for="a7">Patrick</label><br></br>
                        <input id="a8" type="radio" name="q2" value="correct"/>
                        <label for="a8">Power Puff Girls</label><br></br><br></br><br></br>

                        <input id="a9" type="radio" name="q3" value="correct"/>
                        <label for="a9">Grim Adventures of Billy and Mandy</label><br></br>
                        <input id="a10" type="radio" name="q3" value="wrong"/>
                        <label for="a10"> Family Guy</label><br></br>
                        <input id="a11" type="radio" name="q3" value="wrong"/>
                        <label for="a11">Amanda Show</label><br></br>
                        <input id="a12" type="radio" name="q3" value="wrong"/>
                        <label for="a12">Shiny Teeth</label><br></br><br></br><br></br>

                        <input id="a13" type="radio" name="q4" value="wrong"/> 
                        <label for="a13">Puppy</label><br></br>
                        <input id="a14" type="radio" name="q4" value="wrong"/>
                        <label for="a14">Purple Dog</label><br></br>
                        <input id="a15" type="radio" name="q4" value="correct"/>
                        <label for="a15">Courage the Cowardly Dog</label><br></br>
                        <input id="a16" type="radio" name="q4" value="wrong"/> 
                        <label for="a16">Nickelodeon</label><br></br><br></br><br></br>

                        <input id="a17" type="radio" name="q5" value="wrong"/> 
                        <label for="a17">Spongebob</label><br></br>
                        <input id="a18" type="radio" name="q5" value="wrong"/> 
                        <label for="a18">Cat Dog</label><br></br>
                        <input id="a19" type="radio" name="q5" value="wrong"/> 
                        <label for="a19">Hey Arnold!</label><br></br>
                        <input id="a20" type="radio" name="q5" value="correct"/> 
                        <label for="a20">Ed, Edd, and Eddy</label><br></br><br></br><br></br>

                        <input id="a21" type="radio" name="q6" value="wrong"/> 
                        <label for="a21">Scientists</label><br></br>
                        <input id="a22" type="radio" name="q6" value="correct"/> 
                        <label for="a22">Dexters Laboratory</label><br></br>
                        <input id="a23" type="radio" name="q6" value="wrong"/> 
                        <label for="a23">Power Puff Girls</label><br></br>
                        <input id="a24" type="radio" name="q6" value="wrong"/>
                        <label for="a24">Battle Stations</label><br></br><br></br><br></br>
                    </form>
                    <button className="subButton" onClick={this.onSubmit}>Submit</button>     <br></br><br></br>

                    <h1>Your results are: </h1><br></br>
                    <p>{this.state.amountCorrect}</p><br></br>
                    <p>   Out of 6 correct</p>
                    
                </div>
            );
       
        
        
        

    }

}

export default HomePage;

