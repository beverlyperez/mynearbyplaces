import React from 'react';
import { Link } from 'react-router-dom';
import server from '../serverInterface/server';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',

    };

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      this.setState({ latitude: position.coords.latitude });
      this.setState({ longitude: position.coords.longitude });
    });

  }


  handleChange = () => {
    let currentList = [];
    let newList = [];

    if (document.getElementsByClassName.name !== "") {
      currentList = server.getAllPlaces;

      newList = currentList.filter(item => {

        const lc = item.toLowerCase();

        const filter = document.getElementsByClassName.name.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      newList = server.getAllPlaces;
    }
    this.setState({
      filtered: newList
    });
  }

  render() {
    let username = '';
    const location = this.props.location;
    if (location) {
      console.log(location);
      if (location.state) {
        if (location.state.user) {
          username = location.state.user;
        }
      }
    }

    return (
      <div className="search">
        <div>

          <div className="loginButton">
            {username.length > 0 ? username
              : <Link to='/login'>Login</Link>}
          </div>
        </div>
        <h1>Search nearby places</h1>
        <input type="text" onChange={this.handleChange} className="checkFor" placeholder="Search..." />
        <p>{server.getAllPlaces}</p>
        <br></br>
        <Link to='/place'>Add New Place</Link>


      </div>
    );

  }

}

export default HomePage;

