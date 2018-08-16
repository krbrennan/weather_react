import React from 'react';
import sunny from './png/clear.png';
import partlyCloudy from './png/partly_cloud.png';

import moon from './png/moon.png';


const Selector = (props) => {
  // get current hour of day (military time)
  let hours = new Date().getHours()

  const DAYIMGS = {
    "Clear": sunny,
    "Partly Cloudy": partlyCloudy
  }

  const NIGHTIMGS = {
    "Clear": moon
  }

  let icon = 'eh'

  if((hours > 12) || (hours < 7)) {
    icon = DAYIMGS[props.props]
  } else {
    icon = NIGHTIMGS[props.props]
  }
  // returns summary of current weather
  console.log(props.props)
  return(
      <img className='weather-img' src={icon}></img>
  )
}


export default Selector;
