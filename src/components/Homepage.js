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

                    </form>
                    <button className="subButton" onClick={this.onSubmit}>Submit</button>     <br></br><br></br>

                 
                    
                </div>
            );
       
        
        
        

    }

}

export default HomePage;

