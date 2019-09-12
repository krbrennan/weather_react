import React from 'react'
import './timeline.css'


const TimelineHours = (props) => {

  let hours = []
  let skipHours = 0
  // there has to be a better way to inhibit rendering until props has value
  if(props.props.props !== undefined){
    props.props.props.map((hour) => {
      // to stop pulling from props once skipHours exceeds length of arry
      // hours.push(props.props.props.data)
      if(skipHours <= 47) {
        // hours.push(hour.time)
        hours.push(props.props.props[skipHours].time)
        skipHours += 5
      } else {return}
    })

  }

  return(
    <div className='timeline-display-hours'>
      {hours.map((hour, index) => {
        const time = new Date(hour * 1000).getHours();
        let amPm = time > 12 ? 'pm' : 'am'
        let future = (time + 4) % 12
        const futureAmPm = (time + 4) > 12 ? 'pm' : 'am'
        return <span id={'span'+index} className='timeline-display-hours-span'>
          {time > 12 ? time - 12 : time}  {amPm}  <br />--
          <br /> {future}  {futureAmPm}
        </span>
      })}
    </div>
  )
}

export default TimelineHours
