import React, { Component } from 'react';
import storm from './storm.png';
import './App.css';

import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchField: '',
      searched: false
    };
    this.handler = this.handler.bind(this)
  }
  getCoords(){
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
    });
  }


componentDidMount(){
}


  // handler(data) {
  //   console.log(data)
  //   this.setState({
  //     searchField: data,
  //     searched: true
  //   });
  //   const zip = data
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${data},us&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`
  // }

  handler(data){
    // successfully sets state.searchField to zip code
    this.setState({
      searchField: data
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={storm} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Essentials</h1>
        </header>
        <SearchBar handlerFromParent={this.handler}/>
      </div>
    );
  }
}

export default App;
