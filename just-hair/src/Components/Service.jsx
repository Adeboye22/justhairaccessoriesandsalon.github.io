import React from 'react'
import '../styles/service.css'
import Data from '../data/data.json'
import BridalNails from '../assets/BridalNails.jpg'
import FingerNails2 from '../assets/FingerNails2.jpg'
import FingerNails3 from '../assets/FingerNails3.jpg'
import ToeNails1 from '../assets/ToeNails1.jpg'
import BlackToeNails from '../assets/BlackToeNails.jpg'
import ToeNails2 from '../assets/ToeNails2.jpg'
import Gele1 from '../assets/Gele1.jpg'
import Gele2 from '../assets/Gele2.jpg'

const Service = () => {

  return (
    <div>
      {/* manicure section */}
      <section className="man">
          <h1 className="man_h">{Data.services[0].title}</h1>
        <p>{Data.services[0].description}</p>
        <div className="man_d_2">
          <article className="man_i_4"><img src={BridalNails} alt="" width={250} height={200}/></article>
          <article className="man_i_5"><img src={FingerNails2} alt="" width={250} height={200}/></article>
          <article className="man_i_6"><img src={FingerNails3} alt="" width={250} height={200}/></article>
        </div>
        <div className="man_btn"><button>Book a service</button></div>
      </section>
      {/* pedicure section */}
      <section className="ped">
        <h1 className="ped_h">{Data.services[1].title}</h1>
        <p>{Data.services[1].description}</p>
        <div className="ped_d_1">
          <article className="ped_i_1"><img src={ToeNails1} alt="" width={250} height={200}/></article>
          <article className="ped_i_2"><img src={BlackToeNails} alt="" width={250} height={200}/></article>
          <article className="ped_i_3"><img src={ToeNails2} alt="" width={250} height={200}/></article>
        </div>
        <div className="ped_btn"><button>Book a service</button></div>
      </section>
      {/* gele section */}
      <section className="gele">
        <h1 className="gele_h">{Data.services[2].title}</h1>
        <p>{Data.services[2].description}</p>
        <div className="ped_d_1">
          <article className="gele_i_1"><img src={Gele1} alt="" width={250} height={200}/></article>
          <article className="gele_i_2"><img src={Gele2} alt="" width={250} height={200}/></article>
        </div>
        <div className="gele_btn"><button>Book a service</button></div>
      </section>
    </div>
  )
}

export default Service
