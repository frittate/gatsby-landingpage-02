import React from 'react'
import style from '../style/styles'

const Hero = props => {
  console.log(props);
  return (
    <div class="hero-text">
        <h1 style={style.h1}>{props.title}</h1>
        <p><span style={style.subhead}>The Future of Digital Learning</span></p>
        <a href="#mc_embed_signup" class="btn">Join As A Tester Now</a> 
</div>     
  )
}

export default Hero