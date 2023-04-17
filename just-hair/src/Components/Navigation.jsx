import React from 'react';
import JustHairLogo from '../assets/JustHairLogo.png';
import styles from '../styles/navigation.module.css';
import {Link} from 'react-router-dom';

//this component the header file that links to all the pages of the app 
function Navigation() {
  return (
    <div>
      <header> 
        {/* app logo */}
        <img src={JustHairLogo} alt={"JustHair"} width= {110} height={100}/>
        {/* app navigation bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="Service" >Services</Link></li>
            <li><Link to="Product">Products</Link></li>
            <li><Link to="Review">Reviews</Link></li>
            <button>Contact Us</button>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation
