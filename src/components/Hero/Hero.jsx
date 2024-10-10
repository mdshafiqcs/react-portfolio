import React from 'react'
import { profileImage } from '../../assets';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Hero.css";

function Hero() {
  return (
    <div id='home' className='hero'>
      <img className='profile-image' src={profileImage} alt="Profile Picture" />

      <h1> <span>I&apos;m Shafiq Khan,</span> Fullstack Developer Based in Bangladesh</h1>
      <p>I am a Fullstack Developer with 2 years of experience specializing in the MERN stack and Nextjs, and I focus on building dynamic, scalable web applications</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={70} href="#contact" >Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>

    </div>
  )
}

export default Hero