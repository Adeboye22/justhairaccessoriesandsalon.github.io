import React, { useRef,  } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import JustHairLogo from '../assets/JustHairLogo.png';
import '../styles/navigation.css';
import { NavLink} from 'react-router-dom';

//this component the header file that links to all the pages of the app 
function Navigation() {
  const navRef = useRef();
  // let navigate = useNavigate();

  const showNavBar = () =>{
    navRef.current.classList.toggle("responsiveNav");
  }

  // const routeChange = () =>{
  //   navigate('/');
  // }

  const activeBtn = ({isActive}) => {
    return {
      color: isActive? "#B917F2" : "black"
    }
  }

  return (
    <div>
      <header> 
        {/* app logo */}
        <img src={JustHairLogo} alt={"JustHair"}  />
        {/* app navigation bar */}
        <nav ref = {navRef}>
          <ul>
            <li><NavLink style = {activeBtn} to="/" className="home">Home</NavLink></li>
            <li><NavLink style = {activeBtn} to="Service" className="services">Services</NavLink></li>
            <li><NavLink style = {activeBtn} to="Product" className="products">Products</NavLink></li>
            <li><NavLink style = {activeBtn} to="Review" className="reviews" >Reviews</NavLink></li>
          </ul>
          <button className= "contactUs" > <a href="https://api.whatsapp.com/send/?phone=2348161512011&text&type=phone_number&app_absent=0" target='_blank' rel = 'noreferrer'>Contact Us</a></button>
          {/* <button className="navLogInBtn" onClick={routeChange}>Login</button> */}
          <button className="navCloseBtn" onClick={showNavBar}><FaTimes /></button>
        </nav>
        <button className="navBtn" onClick={showNavBar}><FaBars /></button>
      </header>
    </div>
  )
}

export default Navigation