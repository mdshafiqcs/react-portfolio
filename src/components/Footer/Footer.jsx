import React from 'react'
import "./Footer.css";
import { Logo } from "../index";
import { userIcon } from '../../assets';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <Logo /> 
          <p>I am a Fullstack Developer with 5 years of experience specializing in the MERN stack and Laravel, and I focus on building dynamic, scalable web applications</p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="user icon" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; {currentYear} Shafiq Khan. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer