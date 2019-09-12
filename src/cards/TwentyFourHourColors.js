import React from 'react'

const TwentyFourHourColors = (props) => {

  let colors = []
  let numHours = 0

  if(props.props.props !== undefined){
    // console.log(props.props.data)
      props.props.props.map(hour => {
        switch(hour.icon){
          case "cloudy":
          colors.push('#636e72')
          ++numHours
          break
          case 'partly-cloudy-day':
          colors.push('#b2bec3')
          ++numHours
          break
          case 'rain':
          colors.push('#0652DD')
          ++numHours
          break
          case 'sunny':
          colors.push('#FFC312')
          ++numHours
          break
          case 'clear-night':
          colors.push('#FFC312')
          ++numHours
          break
          case 'clear-day':
          colors.push('#FFC312')
          ++numHours
          break
        }
      });
  }

  let timeline = document.getElementById('twentyfour-hour-timeline')

  if(timeline !== undefined){
    return(
        colors.map((color) => {
          return <span style={{backgroundColor: color, width: '66.4px'}}></span>
        })
    )
  } else{
    return(
      <h3></h3>
    )
  }


}

export default TwentyFourHourColors
