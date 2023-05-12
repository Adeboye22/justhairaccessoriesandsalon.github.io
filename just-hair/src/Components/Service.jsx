import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/service.module.css'
import BridalNails from '../assets/BridalNails.jpg'
import BlackFingerNails from '../assets/BlackFingerNails.jpg'
import ArcrylicNails from '../assets/ArcrylicNails.jpg'
import FingerNails1 from '../assets/FingerNails1.jpg'
import FingerNails2 from '../assets/FingerNails2.jpg'
import FingerNails3 from '../assets/FingerNails3.jpg'
import ToeNails1 from '../assets/ToeNails1.jpg'
import BlackToeNails from '../assets/BlackToeNails.jpg'
import ToeNails2 from '../assets/ToeNails2.jpg'
import Gele1 from '../assets/Gele1.jpg'
import Gele2 from '../assets/Gele2.jpg'

class Service extends Component {
  render() {
    return (
      <div>
        <section className="man">
          <h1 className="man_h">Manicure</h1>
          <p>We have one of the best manicure services with professional beauticians to make your nails look pretty clean.</p>
          <div className="man_d_1">
            <article className="man_i_1"><img src={BridalNails} alt="" width={250} height={200}/></article>
            <article className="man_i_2"><img src={BlackFingerNails} alt="" width={250} height={200}/></article>
            <article className="man_i_3"><img src={ArcrylicNails} alt="" width={250} height={200}/></article>
          </div>
          <div className="man_d_2">
            <article className="man_i_4"><img src={FingerNails1} alt="" width={250} height={200}/></article>
            <article className="man_i_5"><img src={FingerNails2} alt="" width={250} height={200}/></article>
            <article className="man_i_6"><img src={FingerNails3} alt="" width={250} height={200}/></article>
          </div>
          <div className="man_btn"><button>Book a service</button></div>
        </section>
        <section className="ped">
          <h1 className="ped_h">Pedicure</h1>
          <div className="ped_d_1">
            <article className="ped_i_1"><img src={ToeNails1} alt="" width={250} height={200}/></article>
            <article className="ped_i_2"><img src={BlackToeNails} alt="" width={250} height={200}/></article>
            <article className="ped_i_3"><img src={ToeNails2} alt="" width={250} height={200}/></article>
          </div>
          <div className="ped_btn"><button>Book a service</button></div>
        </section>
        <section className="gele">
          <h1 className="gele_h">Make-Up and Gele</h1>
          <div className="ped_d_1">
            <article className="gele_i_1"><img src={Gele1} alt="" width={250} height={200}/></article>
            <article className="gele_i_2"><img src={Gele2} alt="" width={250} height={200}/></article>
          </div>
          <div className="gele_btn"><button>Book a service</button></div>
        </section>
      </div>
    )
  }
}

export default Service
