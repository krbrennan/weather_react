import React from 'react'
import Timeline from './Timeline'

const Colors = (props) => {
// console.log('colors')
// console.log(props.props.props.data)
// console.log(props.props.props.data[0])

  // let colors = []
  let colors = []

if(props.props.props.data[0] !== undefined) {
  let numHours = 0
  props.props.props.data.map(hour => {
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

if(timeline !== undefined && colors.length >= 24){
  return(
      colors.map((color) => {
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
