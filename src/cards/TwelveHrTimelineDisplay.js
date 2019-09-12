import React from 'react'
import './twelve-hr-timeline.css'

const TwelveHrTimelineDisplay = (props) => {

    let hours = []
    let skipHours = 0
    // there has to be a better way to inhibit rendering until props has value
    if(props.props.props !== undefined){
      props.props.props.map((hour) => {
        // to stop pulling from props once skipHours exceeds length of arry
        // hours.push(props.props.props.data)
        if(skipHours < 12) {
          hours.push(props.props.props[skipHours].time)
          skipHours++
        } else {return}
      })

    }

    return(
      <div className='twelve-hr-timeline-display-hours'>
        {hours.map(hour => {
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

          return <span className='twelve-hr-timeline-display-hours-span'>
            { currentHour }:00 <br /> {amPm}
          </span>
        })}
      </div>
    )
}

export default TwelveHrTimelineDisplay
