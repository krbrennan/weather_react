import React from 'react'

const TwentyFourHourColors = (props) => {

  let colors = []
  let numHours = 0

  if(props.props !== undefined){
    // console.log(props.props.data)
    if(numHours < 24){
      props.props.data.map(hour => {
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
  }


}

export default TwentyFourHourColors
