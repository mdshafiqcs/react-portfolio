import React from 'react'
import "./About.css";
import { profileImage, themePattern } from '../../assets';
import {SectionTitle} from "../index"

function About() {
  return (
    <div id='about' className='about'>

      <SectionTitle title="About me" />

      <div className="about-sections">
        <div className="about-left">
          <img src={profileImage} alt="Profile Image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Welcome to my portfolio! I’m a passionate Fullstack Developer with a deep focus on building modern web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and Laravel. With experience across both front-end and back-end development, I specialize in creating seamless, dynamic user experiences and efficient server-side logic.</p>
            <p>From crafting intuitive user interfaces to developing robust APIs, my goal is to deliver scalable, high-performing solutions tailored to meet business needs. Explore my work below to see the projects I’ve been involved in, and feel free to reach out for collaborations or inquiries!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"> <p>HTML & CSS</p> <hr style={{width: "50%"}}/> </div>
            <div className="about-skill"> <p>React Js</p> <hr style={{width: "70%"}}/> </div>
            <div className="about-skill"> <p>Javascript</p> <hr style={{width: "60%"}}/> </div>
            <div className="about-skill"> <p>Node JS</p> <hr style={{width: "75%"}}/> </div>
            <div className="about-skill"> <p>Next Js</p> <hr style={{width: "50%"}}/> </div>
            <div className="about-skill"> <p>Tailwind CSS</p> <hr style={{width: "60%"}}/> </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>40+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

    </div>
  )
}

export default About