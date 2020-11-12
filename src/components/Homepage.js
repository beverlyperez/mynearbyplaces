import React from 'react';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            list: [],
            ratings: 0
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
      //Add the item to the list
      
      
    }

    handleChange() {
        let currentList = [];
        let newList = [];

        if (document.getElementsByClassName.name !== "") {
        currentList = this.props.items;

                
        newList = currentList.filter(item => {

            const lc = item.toLowerCase();

            const filter = document.getElementsByClassName.name.toLowerCase();
                    
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
                    <input type="text" onChange={this.handleChange} className="checkFor" placeholder="Search..." />

                    <form id="addNew">
                        <input type="text" placeholder="Add new place"/>
                      
                    </form>
                    <button className="subButton" onClick={this.onSubmit}>Submit</button> <br></br><br></br>

                 
                    
                </div>
            );

    }

}

export default HomePage;

