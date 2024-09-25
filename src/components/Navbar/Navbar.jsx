import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css";
import { navUnderline, menuOpenIcon, menuCloseIcon} from "./../../assets";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Logo} from "./../index"

function Navbar() {

  const [menu, setMenu] = useState("home");

  const sections = ['home', 'about', 'services', 'work', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 6;

    // Loop through each section and check its position relative to the viewport
    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight
        ) {
          setMenu(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const menuRef = useRef();

  function openMenu() {
    menuRef.current.style.right = "0";
  }

  function closeMenu() {
    menuRef.current.style.right = "-350px";
  }


  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <img src={menuOpenIcon} onClick={openMenu} className='nav-mob-open' alt="" />
        <div>
          <Logo />
        </div>
        <ul ref={menuRef} className='nav-menu'>
          <img src={menuCloseIcon} onClick={closeMenu} alt="" className="nav-mob-close" />
          <li><AnchorLink className="anchor-link" offset={110} href="#home" ><p onClick={() => setMenu("home")} >Home</p></AnchorLink>  { menu == "home" ? <img src={navUnderline} alt="nav underline image" /> : <></> } </li>
          <li><AnchorLink className="anchor-link" offset={70} href="#about" ><p onClick={() => setMenu("about")} >About Me</p> </AnchorLink> { menu == "about" ? <img src={navUnderline} alt="nav underline image" /> : <></> } </li>
          <li><AnchorLink className="anchor-link" offset={70} href="#services" ><p onClick={() => setMenu("services")} >Services</p> </AnchorLink> { menu == "services" ? <img src={navUnderline} alt="nav underline image" /> : <></> } </li>
          <li><AnchorLink className="anchor-link" offset={70} href="#work" ><p onClick={() => setMenu("work")} >My Works</p> </AnchorLink> { menu == "work" ? <img src={navUnderline} alt="nav underline image" /> : <></> } </li>
          <li><AnchorLink className="anchor-link" offset={70} href="#contact" ><p onClick={() => setMenu("contact")} >Contact</p> </AnchorLink> { menu == "contact" ? <img src={navUnderline} alt="nav underline image" /> : <></> }</li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={70} href="#contact" >Connect With Me</AnchorLink></div>
      </div>
    </div>
  )
}

export default Navbar