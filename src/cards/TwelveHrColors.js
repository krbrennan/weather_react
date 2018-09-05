import React from 'react'
import './twelve-hr-timeline.css'

const TwelveHrColors = (props) => {
// console.log('colors')
// console.log(props.props.props.data)
// console.log(props.props.props.data[0])

  // let colors = []
  let colors = []

if(props.props.props.data[0] !== undefined) {
  let numHours = 0
    props.props.props.data.map(hour => {
      if(numHours < 12) {
        if(hour.icon === 'cloudy'){
          colors.push('#636e72')
          numHours++
        } else if (hour.icon === 'partly-cloudy-day'){
          colors.push('#b2bec3')
          numHours++
        } else if (hour.icon === 'partly-cloudy-night') {
          colors.push('#b2bec3')
          numHours++
        } else if (hour.icon === 'rain') {
          colors.push('#0652DD')
          numHours++
        } else if (hour.icon === 'sunny'){
          colors.push('#FFC312')
          numHours++
        } else if (hour.icon === 'clear-night'){
          colors.push('#FFC312')
          numHours++
        } else if (hour.icon === 'clear-day'){
          colors.push('#FFC312')
          numHours++
        }
    }})
}

let timeline = document.getElementById('twelve-timeline')

if(timeline !== undefined && colors.length < 13){
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


export default TwelveHrColors
