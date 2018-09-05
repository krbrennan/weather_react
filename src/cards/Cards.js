import React from 'react';
import TodayCard from './TodayCard';
// import Card from './Card'


const Cards = (props) => {
  // console.log(props)
  // console.log(props.props.length)
  console.log('anus')
  // console.log(props)

  if(props.props.length === undefined) {
    return(
      <TodayCard props={props.props} />
    )
  } else { return ""}
}


export default Cards;
