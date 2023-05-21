import React, { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import JustHairLogo from '../assets/JustHairLogo.png';
import '../styles/navigation.css';
import {Link, NavLink} from 'react-router-dom';

//this component the header file that links to all the pages of the app 
function Navigation() {
  const navRef = useRef();

  const showNavBar = () =>{
    navRef.current.classList.toggle("responsiveNav");
  }
  return (
    <div>
      <header> 
        {/* app logo */}
        <img src={JustHairLogo} alt={"JustHair"}  />
        {/* app navigation bar */}
        <nav ref = {navRef}>
          <ul>
            <li><NavLink to="/" className="home">Home</NavLink></li>
            <li><NavLink to="Service" className="services">Services</NavLink></li>
            <li><NavLink to="Product" className="products">Products</NavLink></li>
            <li><NavLink to="Review" className="reviews" >Reviews</NavLink></li>
          </ul>
          <button><a href="https://api.whatsapp.com/send/?phone=2347086582442&text&type=phone_number&app_absent=0" target='_blank'>Contact Us</a></button>
          <button className="navCloseBtn" onClick={showNavBar}><FaTimes /></button>
        </nav>
        <button className="navBtn" onClick={showNavBar}><FaBars /></button>
      </header>
    </div>
  )
}

export default Navigation