import React from 'react'
import '../styles/service.css'
// import Data from '../data/data.json'
// import BridalNails from '../assets/BridalNails.jpg'
// import FingerNails2 from '../assets/FingerNails2.jpg'
// import FingerNails3 from '../assets/FingerNails3.jpg'
// import ToeNails1 from '../assets/ToeNails1.jpg'
// import BlackToeNails from '../assets/BlackToeNails.jpg'
// import ToeNails2 from '../assets/ToeNails2.jpg'
// import Gele1 from '../assets/Gele1.jpg'
// import Gele2 from '../assets/Gele2.jpg'

const Service = ({services}) => {
  return (
    <div className="serviceComponent">
      <h1 className="ourServices">Our Services</h1>
      {services.map((service, index) => (
        <div className="servicesPage">
          <div className="servicesDetails">
            <h3 className="serviceTitle">{service.title}</h3>
          </div>
          <div className="servicesImages">
            <div className="servicesDescription">
              <p className="serviceDescription">{service.description}</p>
              <button className="servicesBtn">Book a session</button>
            </div>
            <img src={ service.image } alt="" className='servicesImg' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Service
