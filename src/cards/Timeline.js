import React from 'react'
import './timeline.css'

const Timeline = (props) => {
  console.log('timeline')
  const timeline = document.getElementById('timeline')
    if(Object.values(props)[0] !== undefined) {
      // console.log(props.props.data)
      return (
        <div id='timeline' className='timeline-container'>

        </div>
      )
    } else {
      return(
        <div>
          <h3>...Loading...</h3>
        </div>
      )
    }

    let span = timeline.createElement(span)
    {props.props.data.map((hour) => {
    })}
}

export default Timeline;
