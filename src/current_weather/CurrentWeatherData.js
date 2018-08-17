import React from 'react';
import './current_weather.css'

const CurrentWeatherData = (props) => {
  // Checks to see if props has a value. if it doesn't,
  // ...Loading... will display in the div
  if(Object.values(props)[0] !== undefined){
    return(
      <div className='current-weather-data'>
        <h2>fuck</h2>
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
