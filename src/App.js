import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import MeteorList from './components/MeteorList';
import MapDisplay from './components/MapDisplay';
import MeteorTable from './components/MeteorTable';
//import ReactLeaflet from 'react-leaflet';

class App extends React.Component {
  state = {
    meteors: []
  };
  render() {
    return (
      <div className="App">
        <Header />
        {/* <MapDisplay lat={this.state.lat} long={this.state.long} /> */}
        <MeteorTable meteors={this.state.meteors} />
        <MapDisplay meteors={this.state.meteors} />
        <MeteorList meteors={this.state.meteors} />
      </div>
    );
  }
  componentDidMount() {
    console.log('App is mounted');
    const url = 'https://data.nasa.gov/resource/gh4g-9sfh.json';
    axios
      .get(url)
      .then(response => {
        console.log(response.data.length);
        this.setState({
          meteors: response.data
        });
      })
      .catch(err => console.log(err));
  }
}

// render(map, document.getElementById('map-container'));

export default App;
