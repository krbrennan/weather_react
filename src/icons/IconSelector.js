import React from 'react';
import sunny from './png/clear.png';
import partlyCloudy from './png/partly_cloud.png';
import rain from './png/rain.png';
import cloudMoon from './png/night_cloud.png'

import moon from './png/moon.png';


const Selector = (props) => {
  // get current hour of day (military time)
  let hours = new Date().getHours()

  // console.log(props.props.icon)

  const DAYIMGS = {
    "clear": sunny,
    "partly-cloudy-day": partlyCloudy,
    "rain": rain
  }

  const NIGHTIMGS = {
    "clear": moon,
    "rain": rain,
    "partly-cloudy-night": cloudMoon
  }

  let icon = ''

  if((hours >= 12) || (hours <= 7)) {
    icon = DAYIMGS[props.props.icon]
  } else {
    icon = NIGHTIMGS[props.props.icon]
  }

  // returns summary of current weather
  return(
      <img className='weather-img' src={icon}></img>
  )
}


export default Selector;
