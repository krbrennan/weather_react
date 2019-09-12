import React from 'react'
// import TwentyFourHourColors from './TwentyFourHourColors.js'
import Colors from './Colors.js'
import './twentyFourHourTimeline.css'

const TwentyFourHourTimeline = (props) => {
  const data =[]

  if(Object.values(props)[0] !== undefined) {
    return(
      <div className='timeline'>
        <h2>24 Hour Forecast</h2>
        <div id='timeline' className='timeline-container'>
          <Colors props={props} />
        </div>
      
      </div>
    )
  } else {
    return(
      <h2></h2>
    )
  }
}




export default TwentyFourHourTimeline
