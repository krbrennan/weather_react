import React from 'react'
import './timeline.css'
import Colors from './Colors'
import TimelineHours from './TimelineHours'

/* <Colors props = {props} /> */
const Timeline = (props) => {

  console.log('timeline')
  // console.log(props)
    if(Object.values(props)[0] !== undefined) {
      // console.log(props.props.data)
      return (
        <div className='timeline'>
          <h2>48 Hour Forecast</h2>
          <div id='timeline' className='timeline-container'>
            <Colors props={props} />
          </div>
          <div id='timeline-div' className='timeline-hours'>
            <TimelineHours props={props} />
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <h3>...Loading...</h3>
        </div>
      )
    }

}

export default Timeline;
