import React from 'react'
import JustHairLogo from '../assets/JustHairLogo.png'
import styles from '../styles/navigation.module.css'

//this component the header file that links to all the pages of the app 
function Navigation() {
  return (
    <div>
      <header> 
        {/* app logo */}
        <img src={JustHairLogo} alt={"JustHair"} width= {100}/>
        {/* app navigation bar */}
        <nav>
            <ul>
                <li><a href="./Homepage">Home</a></li>
                <li><a href="./Service" >Services</a></li>
                <li><a href="./Product">Products</a></li>
                <li><a href="./Review">Reviews</a></li>
            </ul>
            <button>Contact Us</button>
        </nav>
      </header>
    </div>
  )
}

export default Navigation
