import React, { Component } from 'react';
import TodayCard from './TodayCard';
// import Card from './Card'


const Cards = (props) => {
  // console.log(props)
  // console.log(props.props.length)
  if(props.props.length === undefined) {
    return(
      <TodayCard props={props.props} />
    )
  } else { return "...Loading..."}


}


export default Cards;
