import React, { Component } from 'react';
import storm from './storm.png';
import Cards from './cards/Cards'
import './App.css';

import CurrentWeatherData from './current_weather/CurrentWeatherData'
import Timeline from './cards/Timeline'
import TwelveHrTimeline from './cards/TwelveHrTimeline'
import TwentyFourHourTimeline from './cards/TwentyFourHourTimeline'


// import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      darkSkyData: [],
      twelveHourData: [],
      twentyFourHourData: [],
      fourtyEightHourData: [],
      searchField: '',
      lat: 0,
      long: 0,
      searched: true,
      calls: 0
    };
    this.handler = this.handler.bind(this)

    // this.getCoords = this.getCoords.bind(this)
  }

  // async function getForecast(lat,long) {
  //   const proxy = `https://thingproxy.freeboard.io/fetch/`
  //   const url = `https://api.darksky.net/forecast/3c36360a47f4cc747e19871230e1ecd8/${lat},${long}`
  //   const response = await fetch(proxy + url)
  //   hideLoader()
  //   return parseResults(await response.json())
  // }

componentDidMount(){
  // retreives latitude and longitude for darkSky API
  navigator.geolocation.getCurrentPosition(position => {
    let lat = Math.ceil(position.coords.latitude * 100) / 100;
    let long = Math.ceil(position.coords.longitude * 100) / 100;
    this.setState({
      lat: lat,
      long: long
    })
  });
}

async componentDidUpdate(){

  // this is for a future "search by city or zip" feature
      // if(this.state.searched === true){
      //   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchField},us&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`);
      //   const json = await response.json();
      //   this.setState({
      //     data: json,
      //     lat: json.coord.lat,
      //     long: json.coord.lon
      //   });
      // need to set searched to false to stop infinite API calls
      //   this.setState({searched: false})
      // }

      // async function setData(jsonBlob){
      //     // console.log(jsonBlob.hourly.data.slice(0,48))
      //     this.setState({
      //       twelveHrData: jsonBlob.data.slice(0,12),
      //       twentyFourHourData: jsonBlob.data.slice(0,24),
      //       fourtyEightHourData: jsonBlob.data.slice(0,48)
      //     });
      // }


    //checks to make sure only one api call is made
    if(this.state.lat !== 0 && this.state.searched === true){
      const proxy = `https://mighty-savannah-21809.herokuapp.com/`
      const url = `https://api.darksky.net/forecast/3c36360a47f4cc747e19871230e1ecd8/${this.state.lat},${this.state.long}/?exclude=minutely,flags`
      const darkResponse = await fetch(proxy + url)
      const darkJson = await darkResponse.json()
      // console.log(darkJson.hourly.data)
      this.setState({
        darkSkyData: darkJson,
        twelveHourData: darkJson.hourly.data.slice(0,12),
        twentyFourHourData: darkJson.hourly.data.slice(0,24),
        fourtyEightHourData: darkJson.hourly.data.slice(0,48),
        searched: false,
        calls: this.state.calls += 1
      });
    }
}


  handler(data){
    // successfully sets state.searchField to zip code
    // Because i went over API limit by accident I removed the searchBox's
    // relationship with retreiving data
    // this.setState({
    //   searchField: data,
    //   searched: true
    // });

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={storm} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Essentials</h1>
        </header>
        <CurrentWeatherData props={this.state.darkSkyData.currently} />
        {/* <SearchBar handlerFromParent={this.handler}/> */}
        <Cards props={this.state.darkSkyData} />
        <TwelveHrTimeline props={this.state.twelveHourData} />
        <TwentyFourHourTimeline props={this.state.twentyFourHourData} />
        <Timeline props={this.state.fourtyEightHourData} />
      </div>
    );
  }
}

export default App;
