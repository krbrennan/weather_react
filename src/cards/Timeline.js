import React from 'react'
import './timeline.css'
import Colors from './Colors'
import TimelineHours from './TimelineHours'

const Timeline = (props) => {

    if(Object.values(props)[0] !== undefined) {
      return (
        <div className='timeline'>
          <h2>48 Hour Forecast</h2>
          <div id='timeline' className='timeline-container'>
            <Colors props={props} />
          </div>
            <TimelineHours props={props} />
        </div>
      )
    } else {
      return(
        <div>
          <h2>...Loading...</h2>
        </div>
      )
    }

}

export default Timeline;
