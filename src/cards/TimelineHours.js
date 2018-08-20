import React from 'react'
import './timeline.css'


const TimelineHours = (props) => {

  let hours = []
  let skipHours = 0
if(props.props.props.data !== undefined){
  props.props.props.data.map((hour) => {
    // to stop pulling from props once skipHours exceeds length of arry
    // hours.push(props.props.props.data)
    if(skipHours <= 48) {
      // hours.push(hour.time)
      hours.push(props.props.props.data[skipHours].time)
      skipHours += 6
    } else {return}
  })
  console.log('timelineHours')
  console.log(hours)

}
  // console.log(props.props.props.data)
  return(
    <div className='timeline-hours'>
      {hours.map(hour => {
        const time = new Date(hour * 1000).getHours()
        let future = (time + 5) % 12
        return <span>
          {time > 12 ? time - 12 : time}:00
          --  {future}:00
        </span>
      })}
    </div>
  )
}

export default TimelineHours
