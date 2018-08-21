import React from 'react'
import './timeline.css'


const TimelineHours = (props) => {

  let hours = []
  let skipHours = 0
  // there has to be a better way to inhibit rendering until props has value
  if(props.props.props.data !== undefined){
    props.props.props.data.map((hour) => {
      // to stop pulling from props once skipHours exceeds length of arry
      // hours.push(props.props.props.data)
      if(skipHours <= 48) {
        // hours.push(hour.time)
        hours.push(props.props.props.data[skipHours].time)
        skipHours += 5
      } else {return}
    })
    // console.log('timelineHours')
    // console.log(hours)

  }
  // console.log(props.props.props.data)
  return(
    <div className='timeline-display-hours'>
      {hours.map(hour => {
        const time = new Date(hour * 1000).getHours();
        let amPm = time > 12 ? 'pm' : 'am'
        let future = (time + 4) % 12
        const futureAmPm = (time + 4) > 12 ? 'pm' : 'am'
        return <span className='timeline-display-hours-span'>
          {time > 12 ? time - 12 : time}:00  {amPm}  <br />--
          <br /> {future}:00  {futureAmPm}
        </span>
      })}
    </div>
  )
}

export default TimelineHours
