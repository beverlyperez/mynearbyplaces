import React from 'react';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            
        };

    }
   
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          this.setState({latitude: position.coords.latitude});
          this.setState({longitude: position.coords.longitude});
        });
        
      }
   
    
    onSubmit = () => {
        var amountCorrect = 0;          
        
    }

    handleChange(e) {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
        currentList = this.props.items;

                
        newList = currentList.filter(item => {

            const lc = item.toLowerCase();

            const filter = e.target.value.toLowerCase();
                    
            return lc.includes(filter);
        });
        } else {
        newList = this.props.items;
        }
        this.setState({
        filtered: newList
        });
    }

    render(){
        
        
            return (
                <div className="search">
                    <h1>Search nearby places</h1>
                    <input type="text" className="input" placeholder="Search..." />

                    <form id="addNew">
                        <input type="text" placeholder="Add new place"/>
                        
                    </form>
                    <button className="subButton" onClick={this.onSubmit}>Submit</button>     <br></br><br></br>

                 
                    
                </div>
            );
       
        
        
        

    }

}

export default HomePage;

