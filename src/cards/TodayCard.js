import React from 'react';
import './today_card.css';
import IconSelector from '../icons/IconSelector'

const Card = (props) => {
  console.log('wubalubadubdub')
  console.log(props)


  /* <img className='weather-img' src={require('../icons/png/001-cloud.png')}></img> */
  return(
    <div className='container'>
      <div className='currently'>
        <div className='icon'>
          <IconSelector props={props.props.currently} />
        </div>
        <div className='current-forecast'>
          <h2>{Math.round(props.props.currently.temperature)}˚</h2>
          <h2>{props.props.currently.summary}</h2>
          <h4 className='today-temp'> {Math.round(props.props.daily.data[0].temperatureHigh)}˚ /  {Math.round(props.props.daily.data[0].temperatureLow)}˚ </h4>
        </div>
      </div>
      <div className='summary'>
        <span>{ props.props.daily.data[0].summary }</span>
      </div>
    </div>
  )
}


export default Card;
