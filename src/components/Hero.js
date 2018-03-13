import React from 'react'

const style = {
  h1: {
    textAlign: "center",
    color: "red",
  }
}

const Hero = props => {
  console.log(props);
  return (
    <h1 style={style.h1}>{props.title}</h1>
  )
}

export default Hero