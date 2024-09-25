import React from 'react'
import {logo} from "./../../assets";
import "./Logo.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Logo() {
  return (
    <AnchorLink className="anchor-link" offset={110} href="#home" >
      <img src={logo} alt="logo" className="logo" />
    </AnchorLink>
  )
}

export default Logo