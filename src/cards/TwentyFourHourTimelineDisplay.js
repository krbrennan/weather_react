import React from 'react'
import './twentyFourHourTimeline.css'

const TwentyFourHourTimelineDisplay = (props) => {

    let hours = []
    let skipHours = 0
    // there has to be a better way to inhibit rendering until props has value
    if(props.props.props !== undefined){
      props.props.props.map((hour) => {
        // to stop pulling from props once skipHours exceeds length of arry
        // hours.push(props.props.props.data)
        if(skipHours < 24) {
          // hours.push(hour.time)
          hours.push(props.props.props[skipHours].time)
          skipHours+=3
        } else {return}
      })
      // console.log('timelineHours')
      // console.log(hours)

    }
    // console.log(props.props.props.data)
    return(
      <div className='twenty-four-hour-timeline-display'>
        {hours.map(hour => {
          const time = new Date(hour * 1000).getHours();
          let amPm = time > 12 ? 'pm' : 'am'
          let future = (time + 3) % 12
          const futureAmPm = (time + 4) > 12 ? 'pm' : 'am'
          return <span className='twenty-four-hr-timeline-display-hours-span'>
            {time > 12 ? time - 12 : time} {amPm} <br /> -- <br />
            { future } { futureAmPm }
          </span>
        })}
      </div>
    )
}

export default TwentyFourHourTimelineDisplay
