import React from 'react'
import '../styles/service.css'

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
