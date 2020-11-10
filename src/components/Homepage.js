import React from 'react';
import './homePage.css';
import cherryblossom from './images/cherryblossom.png';
import daffodil from './images/daffodil.png';
import daisy from './images/daisy.jpg';
import lily from './images/lily.jpg';
import rose from './images/rose.png';
import sunflower from './images/sunflower.png';
import tulip from './images/tulip.png';
import waterlily from './images/waterlily.png';

import videoGames from './images/VIDEOG.png';
import cn from './images/CN.jpg';
import hallow from './images/ZOMBIE.jpg';

//Halloween
import witch from './images/WITCH.jpg';
import skull from './images/SKULL.jpg';
import spider from './images/SPIDER.jpg';
import ghost from './images/GHOST.jpg';
import jack from './images/JACK.png';
import fkstn from './images/FKSTN.jpg';

//Video Games
import king from './images/KING.png';
import spyro from './images/SPYRO.jpg';
import bios from './images/BIOS.jpg';
import jackn from './images/JAKND.jpg';
import sly from './images/SLY.jpg';
import unc from './images/UNC.jpg';

//Cartoons
import knd from './images/KND.jpg';
import power from './images/powerpuff.jpg';
import billy from './images/BM.jpg';
import cour from './images/CCD.png';
import eee from './images/EEE.jpg';
import dl from './images/DL.jpg';
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

    activateStateV = (event) => {
        if(!this.state.quizVideoG){
            this.setState({quizVideoG: true});
            this.setState({results: false});
        }
        event.preventDefault();
    
    }
    activateStateH = (event) => {
        if(!this.state.quizHall){

            this.setState({quizHall: true});
            this.setState({results: false});

        }
        event.preventDefault();
    
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

    restartVideoG = (event) => {
        if(!this.state.quizVideoG){
            this.setState({results: false});

            this.setState({quizVideoG: true});
        }
        event.preventDefault();
    }

    restartHall = (event) => {
        if(!this.state.quizHall){
            this.setState({results: false});

            this.setState({quizHall: true});
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
        
        if(this.state.quizCnCart){
            return (
                <div className="CNQ">
                    <h1>Which cartoon show from Cartoon Network, does the picture show?</h1>
                    <form id="quiz">
                        
                        <img src={knd} alt = "kids" height={150} width={200} /><br></br>
                        <input id="a1" type="radio" name="q1" value="wrong"/>
                        <label for="a1">Billy and Mandy</label><br></br>
                        <input id="a2" type="radio" name="q1" value="correct"/>
                        <label for="a2">Codename: Kids Next Door</label><br></br>
                        <input id="a3" type="radio" name="q1" value="wrong"/>
                        <label for="a3">Power Puff Girls</label><br></br>
                        <input id="a4" type="radio" name="q1" value="wrong"/>
                        <label for="a4">Drake and Josh</label><br></br><br></br><br></br>

                        <img src={power} alt = "power" height={150} width={200} /><br></br>
                        <input id="a5" type="radio" name="q2" value="wrong"/> 
                        <label for="a5">The Heroes of Townsville</label><br></br>
                        <input id="a6" type="radio" name="q2" value="wrong"/>
                        <label for="a6">Supers</label><br></br>
                        <input id="a7" type="radio" name="q2" value="wrong"/>
                        <label for="a7">Patrick</label><br></br>
                        <input id="a8" type="radio" name="q2" value="correct"/>
                        <label for="a8">Power Puff Girls</label><br></br><br></br><br></br>

                        <img src={billy} alt = "bnm" height={150} width={200} /><br></br>
                        <input id="a9" type="radio" name="q3" value="correct"/>
                        <label for="a9">Grim Adventures of Billy and Mandy</label><br></br>
                        <input id="a10" type="radio" name="q3" value="wrong"/>
                        <label for="a10"> Family Guy</label><br></br>
                        <input id="a11" type="radio" name="q3" value="wrong"/>
                        <label for="a11">Amanda Show</label><br></br>
                        <input id="a12" type="radio" name="q3" value="wrong"/>
                        <label for="a12">Shiny Teeth</label><br></br><br></br><br></br>

                        <img src={cour} alt = "ccds" height={150} width={200} /><br></br>
                        <input id="a13" type="radio" name="q4" value="wrong"/> 
                        <label for="a13">Puppy</label><br></br>
                        <input id="a14" type="radio" name="q4" value="wrong"/>
                        <label for="a14">Purple Dog</label><br></br>
                        <input id="a15" type="radio" name="q4" value="correct"/>
                        <label for="a15">Courage the Cowardly Dog</label><br></br>
                        <input id="a16" type="radio" name="q4" value="wrong"/> 
                        <label for="a16">Nickelodeon</label><br></br><br></br><br></br>

                        <img src={eee} alt = "eds" height={150} width={200} /><br></br>
                        <input id="a17" type="radio" name="q5" value="wrong"/> 
                        <label for="a17">Spongebob</label><br></br>
                        <input id="a18" type="radio" name="q5" value="wrong"/> 
                        <label for="a18">Cat Dog</label><br></br>
                        <input id="a19" type="radio" name="q5" value="wrong"/> 
                        <label for="a19">Hey Arnold!</label><br></br>
                        <input id="a20" type="radio" name="q5" value="correct"/> 
                        <label for="a20">Ed, Edd, and Eddy</label><br></br><br></br><br></br>

                        <img src={dl} alt = "dext" height={150} width={200} /><br></br>
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
                    <button className="returnHome" onClick={this.EmptyAll}>Go Home</button><br></br><br></br>
                    <button className="TryAgain" onClick={this.restartCnCart}>Try Again</button><br></br>
                    
                </div>
            );
        }
        if(this.state.quizHall){
            return (
                <div className="HALL">
                    <h1>What is the name of this halloween item?</h1>
                    <form id="quiz">
                        
                        <img src={witch} alt = "witch" height={150} width={200} /><br></br>
                        <input id="answer" type="radio" name="q1" value="wrong"/> 
                        <label for="a1">Woman</label><br></br>
                        <input id="a2" type="radio" name="q1" value="correct"/> 
                        <label for="a2">Witch</label><br></br>
						<input id="a3" type="radio" name="q1" value="wrong"/> 
                        <label for="a3">Troll</label><br></br>
						<input id="a4" type="radio" name="q1" value="wrong"/> 
						<label for="a4">Strangers in the night</label><br></br><br></br><br></br>
						
                        <img src={ghost} alt = "ghost" height={150} width={200} /><br></br>
                        <input id="a5" type="radio" name="q2" value="wrong"/> 
                        <label for="a5">Bed sheet</label><br></br>
						<input id="a6" type="radio" name="q2" value="wrong"/> 
                        <label for="a6">Human</label><br></br>
						<input id="a7" type="radio" name="q2" value="wrong"/> 
                        <label for="a7">Spider</label><br></br>
						<input id="a8" type="radio" name="q2" value="correct"/> 
						<label for="a8">Ghost</label><br></br><br></br><br></br>

                        <img src={spider} alt = "spider" height={150} width={200} /><br></br>
                        <input id="a9" type="radio" name="q3" value="correct"/> 
                        <label for="a9">Spider</label><br></br>
						<input id="a10" type="radio" name="q3" value="wrong"/> 
                        <label for="a10">Chocho (bug)</label><br></br>
						<input id="a11" type="radio" name="q3" value="wrong"/>
                        <label for="a11"> CuCuy (monster)</label><br></br>
						<input id="a12" type="radio" name="q3" value="wrong"/> 
						<label for="a12">Fly</label><br></br><br></br><br></br>
						
                        <img src={jack} alt = "jack" height={150} width={200} /><br></br>
                        <input id="a13" type="radio" name="q4" value="wrong"/> 
                        <label for="a13">Orange</label><br></br>
						<input id="a14" type="radio" name="q4" value="wrong"/> 
                        <label for="a14">Spider Web</label><br></br>
						<input id="a15" type="radio" name="q4" value="correct"/> 
                        <label for="a15">Jackolantern</label><br></br>
						<input id="a16" type="radio" name="q4" value="wrong"/> 
						<label for="a16">Helper</label><br></br><br></br><br></br>

                        <img src={fkstn} alt = "fkstn" height={150} width={200} /><br></br>
                        <input id="a17" type="radio" name="q5" value="wrong"/> 
                        <label for="a17">Dead guy</label><br></br>
						<input id="a18" type="radio" name="q5" value="wrong"/> 
                        <label for="a18">Yolanda</label><br></br>
						<input id="a19" type="radio" name="q5" value="wrong"/> 
                        <label for="a19">Neighbor</label><br></br>
						<input id="a20" type="radio" name="q5" value="correct"/> 
						<label for="a20">Frankenstein</label><br></br><br></br><br></br>
						
                        <img src={skull} alt = "skull" height={150} width={200} /><br></br>
                        <input id="a21" type="radio" name="q6" value="wrong"/> 
                        <label for="a21">White</label><br></br>
						<input id="a22" type="radio" name="q6" value="correct"/> 
                        <label for="a22">Skull</label><br></br>
						<input id="a23" type="radio" name="q6" value="wrong"/> 
                        <label for="a23">Ghost</label><br></br>
						<input id="a24" type="radio" name="q6" value="wrong"/> 
						<label for="a24">Warrior</label><br></br><br></br><br></br>

                    </form>
                    <button className="subButton" onClick={this.onSubmit}>Submit</button>     <br></br><br></br>

                    <h1>Your results are: </h1><br></br>
                    <p>{this.state.amountCorrect}</p><br></br>
                    <p>    Out of 6 correct</p>
                    <button className="returnHome" onClick={this.EmptyAll}>Go Home</button><br></br><br></br>
                    <button className="TryAgain" onClick={this.restartHall}>Try Again</button><br></br>
                    
                </div>
            );
        }
        if(this.state.quizVideoG){
            return (
                <div className="VG">
                    <h1>From which video game is the picture from?</h1>
                    <form id="quiz">
                        
                        <img src={unc} alt = "unc" height={150} width={200} /><br></br>
                        <input id="a1" type="radio" name="q1" value="wrong"/> 
						<label for="a1">Farcry</label><br></br>
						<input id="a2" type="radio" name="q1" value="correct"/> 
                        <label for="a2">Uncharted</label><br></br>
						<input id="a3" type="radio" name="q1" value="wrong"/> 
                        <label for="a3">Devil in Disguise</label><br></br>
						<input id="a4" type="radio" name="q1" value="wrong"/> 
						<label for="a4">Unbelievable</label><br></br><br></br><br></br>
						
                        <img src={sly} alt = "sly" height={150} width={200} /><br></br>
                        <input id="a5" type="radio" name="q2" value="wrong"/> 
                        <label for="a5">Racoon Adventures</label><br></br>
						<input id="a6" type="radio" name="q2" value="wrong"/> 
                        <label for="a6">Spy Intruders</label><br></br>
						<input id="a7" type="radio" name="q2" value="wrong"/> 
                        <label for="a7">Patrick the Hippo</label><br></br>
						<input id="a8" type="radio" name="q2" value="correct"/> 
						<label for="a8">Sly Cooper</label><br></br><br></br><br></br>
						
                        <img src={bios} alt = "bios" height={150} width={200} /><br></br>
                        <input id="a9" type="radio" name="q3" value="correct"/> 
                        <label for="a9">Bioshock</label><br></br>
						<input id="a10" type="radio" name="q3" value="wrong"/> 
                        <label for="a10">The Handy Man</label><br></br>
						<input id="a11" type="radio" name="q3" value="wrong"/> 
                        <label for="a11">Dont do Drugs!</label><br></br>
						<input id="a12" type="radio" name="q3" value="wrong"/> 
						<label for="a12">Zombies</label><br></br><br></br><br></br>
						
                        <img src={king} alt = "king" height={150} width={200} /><br></br>
                        <input id="a13" type="radio" name="q4" value="wrong"/> 
                        <label for="a13">Help Wanted</label><br></br>
						<input id="a14" type="radio" name="q4" value="wrong"/> 
                        <label for="a14">Nathan Drake</label><br></br>
						<input id="a15" type="radio" name="q4" value="correct"/> 
                        <label for="a15">Kingdom Hearts</label><br></br>
						<input id="a16" type="radio" name="q4" value="wrong"/> 
						<label for="a16">Disney</label><br></br><br></br><br></br>
						
                        <img src={spyro} alt = "spy" height={150} width={200} /><br></br>
                        <input id="a17" type="radio" name="q5" value="wrong"/>
                        <label for="a17"> Naughty Dog</label><br></br>
						<input id="a18" type="radio" name="q5" value="wrong"/> 
                        <label for="a18">Dragon</label><br></br>
						<input id="a19" type="radio" name="q5" value="wrong"/> 
                        <label for="a19">The Future</label><br></br>
						<input id="a20" type="radio" name="q5" value="correct"/> 
						<label for="a20">Spyro</label><br></br><br></br><br></br>
						
                        <img src={jackn} alt = "jack" height={150} width={200} /><br></br>
                        <input id="a21" type="radio" name="q6" value="wrong"/> 
                        <label for="a21">The Legacy</label><br></br>
						<input id="a22" type="radio" name="q6" value="correct"/> 
                        <label for="a22">Jack and Daxter</label><br></br>
						<input id="a23" type="radio" name="q6" value="wrong"/> 
                        <label for="a23">Crash Bash</label><br></br>
						<input id="a24" type="radio" name="q6" value="wrong"/> 
						<label for="a24">Bandicoot</label><br></br><br></br><br></br>
                    </form>
                    <button className="subButton" onClick={this.onSubmit}>Submit</button>     <br></br><br></br>

                    <h1>Your results are: </h1><br></br>
                    <p>{this.state.amountCorrect}</p><br></br>
                    <p>   Out of 6 correct</p>
                    <button className="returnHome" onClick={this.EmptyAll}>Go Home</button><br></br><br></br>
                    <button className="TryAgain" onClick={this.restartVideoG}>Try Again</button><br></br>

                </div>
            );
        }
        else{
            return (
                
                <div className="home">
                    <p>Quizes to take:</p>  
                        <table className="pics">
                            <tr className="row1">
                                <td><img src={videoGames} onClick={this.activateStateV} alt = "vg" height={150} width={300} /> Video Games </td>
                                <td><img src={hallow} onClick={this.activateStateH} alt = "hw" height={150} width={300} /> Halloween </td>
                                <td><img src={cn} onClick={this.activateStateC} alt = "cn" height={150} width={300}/> Cartoon Network Cartoons </td>                        
                            </tr>
                        </table>
                        <br></br>
                    <table className="pics">
                        <tr className="row1">
                            <td><img src={cherryblossom} alt = "cherry" height={150} width={150} /> Cherry Blossom </td>
                            <td><img src={daffodil} alt = "daffodil" height={150} width={150} /> Daffodil </td>
                            <td><img src={daisy} alt = "daisy" height={150} width={150}/> Daisy </td>
                            <td><img src={lily} alt = "lily" height={150} width={150} /> Lily </td>
                            
                        </tr>
                        <tr className="row2">
                            <td><img src={rose} alt = "rose" height={150} width={150} /> Rose </td>
                            <td><img src={sunflower} alt = "sunflower" height={150} width={150} /> Sunflower </td>
                            <td><img src={tulip} alt = "tulip" height={150} width={150} /> Tulip </td>
                            <td><img src={waterlily} alt = "waterlily" height={150} width={150} /> WaterLily </td>
                            
                        </tr>
                    </table>
                
                </div>  
            );
        }
        

    }

}

export default HomePage;

