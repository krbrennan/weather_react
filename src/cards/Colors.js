import React from 'react'
import Timeline from './Timeline'


const Colors = (props) => {
  let colors = []

  if(props.props.props !== undefined) {
    let numHours = 0
    props.props.props.map(hour => {
        if(hour.icon === 'cloudy'){
            colors.push('#636e72')
        } else if (hour.icon === 'partly-cloudy-day'){
            colors.push('#b2bec3')
        } else if (hour.icon === 'partly-cloudy-night') {
            colors.push('#b2bec3')
        } else if (hour.icon === 'rain') {
            colors.push('#0652DD')
        } else if (hour.icon === 'sunny'){
            colors.push('#FFC312')
        } else if (hour.icon === 'clear-night'){
          colors.push('#FFC312')
        } else if (hour.icon === 'clear-day'){
          colors.push('#FFC312')
        }
    })
  }

  let timeline = document.getElementById('timeline')

  if(timeline !== undefined){
    return(
        colors.map((color) => {
          return <span className="color-box" style={{backgroundColor: color}}></span>
        })
    )
  } else{
    return(
      <h3>Loading</h3>
    )
  }
}


export default Colors
