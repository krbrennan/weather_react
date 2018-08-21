import React from 'react';
import './today_card.css';
import IconSelector from '../icons/IconSelector'

const Card = (props) => {
  console.log('wubalubadubdub')

  /* <img className='weather-img' src={require('../icons/png/001-cloud.png')}></img> */
  let currently = props.props.currently
  console.log(currently)
  return(
    <div className='container'>
      <div className='currently'>
        <div className='icon'>
          <IconSelector props={currently} />
        </div>
        <div className='current-forecast'>
          <h2>{Math.round(currently.temperature)}˚</h2>
          <h2>{currently.summary}</h2>
          {/* <h4 className='today-temp'> {Math.round(props.props.daily.data[0].temperatureHigh)}˚ /  {Math.round(props.props.daily.data[0].temperatureLow)}˚ </h4> */}
        </div>
      </div>
      <div className='summary'>
        <span>{ props.props.daily.data[0].summary }</span>
      </div>
    </div>
  )
}


export default Card;
