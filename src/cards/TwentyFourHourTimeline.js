import React from 'react'
// import TwentyFourHourColors from './TwentyFourHourColors.js'
// import Colors from './Colors.js'
import TwentyFourHourColors from './TwentyFourHourColors.js'
import './twentyFourHourTimeline.css'
import TwentyFourHourTimelineDisplay from './TwentyFourHourTimelineDisplay.js'

const TwentyFourHourTimeline = (props) => {
  const data = []

  if(Object.values(props)[0] !== undefined) {
    return(
      <div className='timeline-24'>
        <h2>24 Hour Forecast</h2>
        <div id='timeline-24' className='timeline-container-24'>
          <TwentyFourHourColors props={props} />
        </div>
        <div id='twentyfour-timeline-div' className='twentyfour-timeline-hours'>
          <TwentyFourHourTimelineDisplay props={props} />
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
