import React from 'react'
import Timeline from './Timeline'

const Colors = (props) => {
// console.log('colors')
// console.log(props.props.props.data)
// console.log(props.props.props.data[0])

  let colors = []

if(props.props.props.data[0] !== undefined) {
  let numHours = 0
  props.props.props.data.map(hour => {
    // if(numHours < 24) {
      if(hour.icon === 'cloudy'){
          colors.push('#636e72')
          numHours ++;
      } else if (hour.icon === 'partly-cloudy-day'){
          colors.push('#b2bec3');
          numHours ++;
      } else if (hour.icon === 'partly-cloudy-night') {
          colors.push('#b2bec3');
          numHours ++;
      } else if (hour.icon === 'rain') {
          colors.push('#0652DD');
          numHours ++;
      } else if (hour.icon === 'sunny'){
          colors.push('#FFC312')
          numHours ++;
      }
    // }
  })
}

let timeline = document.getElementById('timeline')

// console.log(colors)
if(timeline !== undefined && colors.length >= 24){
  return(
      colors.map((color) => {
        // console.log(color)
        return <span style={{backgroundColor: color}}></span>
      })
  )
} else{
  return(
    <h3>Loading</h3>
  )
}

  //  else {
  //   return(
  //     <h2>Loading</h2>
  //   )
  // }

}


export default Colors
