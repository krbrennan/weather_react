import React from 'react'

const TwentyFourHourColors = (props) => {

  let colors = []
  let numHours = 0
console.log(props)
  if(props.props.props !== undefined){
    // console.log(props.props.data)
      props.props.props.map(hour => {
        switch(hour.summary){
          case "Cloudy":
            colors.push('#A9A9A9')
            ++numHours
            break
          case 'Partly Cloudy':
            colors.push('#D3D3D3')
            ++numHours
            break
          case 'Rain':
            colors.push('#0652DD')
            ++numHours
            break
          case 'Sunny':
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
          case 'Overcast':
            colors.push('#DCDCDC')
            ++numHours
            break
          case 'Mostly Cloudy':
            colors.push('#C0C0C0')
            ++numHours
            break
          default:
            colors.push("#0000")
            break
        }
      });
  }

  let timeline = document.getElementById('twentyfour-hour-timeline')

  if(timeline !== undefined){
    return(
        colors.map((color) => {
          return <span style={{backgroundColor: color }}></span>
        })
    )
  } else{
    return(
      <h3></h3>
    )
  }


}

export default TwentyFourHourColors
