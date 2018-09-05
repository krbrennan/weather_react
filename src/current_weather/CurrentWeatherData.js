import React from 'react';
import './current_weather.css'

const CurrentWeatherData = (props) => {
  console.log(props)
  // Checks to see if props has a value. if it doesn't,
  // ...Loading... will display in the div
  if(Object.values(props)[0] !== undefined){
    return(
      <div className='current-weather-data'>
          <div className='feels-like'>
            <span className='current-weather-bold'>Feels Like: </span>
            <span>{Math.round(props.props.apparentTemperature)}</span>
          </div>
          <div className='humidity'>
            <span className='current-weather-bold'>Humidity: </span>
            <span>{ Math.round(props.props.humidity * 100) }%</span>
          </div>
          <div className='uv'>
            <span className='current-weather-bold'>UV: </span>
            <span>{ props.props.uvIndex }/10</span>
          </div>
          <div className='cloud-cover'>
            <span className='current-weather-bold'>Cloud Cover: </span>
            <span>{ props.props.cloudCover}%</span>

          </div>
      </div>
    )
  } else {
    return(
      <div className='current-weather-data'>
          <h2>...Loading...</h2>
      </div>
    )
  }
  // console.log(props.props)

}


export default CurrentWeatherData;
