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
          hours.push(props.props.props[skipHours].time)
          skipHours+= 4
        } else {return}
      })

    }
    return(
      <div className='twenty-four-hour-timeline-display'>
        {hours.map((hour, index) => {
          const time = new Date(hour * 1000).getHours();
          let currentHour = 0

          if(time == 0){
            currentHour = 12
          } else if(time > 12){
            currentHour = time - 12
          } else {
            currentHour = time
          }

          let amPm = time > 12 ? 'pm' : 'am'
          let future = 0

          if((time+3) % 12 == 0){
            future = 12
          } else { future = (time + 3) % 12 }

          const futureAmPm = (time + 3) > 12 ? 'pm' : 'am'

          return <span id={ 'span24-'+index} className='twenty-four-hr-timeline-display-hours-span'>
            {currentHour} {amPm} <br /> -- <br />
            { future } { futureAmPm }
          </span>
        })}
      </div>
    )
}

export default TwentyFourHourTimelineDisplay
