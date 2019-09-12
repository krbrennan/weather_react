import React from 'react'
import TwelveHrColors from './TwelveHrColors'
import TwelveHrTimelineDisplay from './TwelveHrTimelineDisplay'

const TwelveHrTimeline = (props) => {
    if(props.props !== undefined){
      return(
        <div className='twelve-timeline'>
          <h2>12 Hour Forecast</h2>
          <div id='twelve-timeline' className='twelve-timeline-container'>
            <TwelveHrColors props={props} />
          </div>
          <div id='twelve-timeline-div' className='twelve-timeline-hours'>
            <TwelveHrTimelineDisplay props={props} />
          </div>
        </div>
      )
    } else {
      return(
        <h2></h2>
      )
    }

}

export default TwelveHrTimeline
