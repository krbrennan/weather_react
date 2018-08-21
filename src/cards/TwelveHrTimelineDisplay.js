import React from 'react'
import './twelve-hr-timeline.css'

const TwelveHrTimelineDisplay = (props) => {

    let hours = []
    let skipHours = 0
    // there has to be a better way to inhibit rendering until props has value
    if(props.props.props.data !== undefined){
      props.props.props.data.map((hour) => {
        // to stop pulling from props once skipHours exceeds length of arry
        // hours.push(props.props.props.data)
        if(skipHours < 12) {
          // hours.push(hour.time)
          hours.push(props.props.props.data[skipHours].time)
          skipHours++
        } else {return}
      })
      // console.log('timelineHours')
      // console.log(hours)

    }
    // console.log(props.props.props.data)
    return(
      <div className='twelve-hr-timeline-display-hours'>
        {hours.map(hour => {
          const time = new Date(hour * 1000).getHours();
          let amPm = time > 12 ? 'pm' : 'am'
          let future = (time + 4) % 12
          const futureAmPm = (time + 4) > 12 ? 'pm' : 'am'
          return <span className='twelve-hr-timeline-display-hours-span'>
            {time > 12 ? time - 12 : time}:00 <br /> {amPm}
          </span>
        })}
      </div>
    )
}

export default TwelveHrTimelineDisplay
