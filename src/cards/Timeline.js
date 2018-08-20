import React from 'react'
import './timeline.css'
import Colors from './Colors'

/* <Colors props = {props} /> */
const Timeline = (props) => {

  console.log('timeline')
  // console.log(props)
    if(Object.values(props)[0] !== undefined) {
      // console.log(props.props.data)
      return (
        <div id='timeline' className='timeline-container'>
          <Colors props={props} />
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
