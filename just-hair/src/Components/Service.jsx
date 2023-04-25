import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/service.module.css'
import BridalNails from '../assets/BridalNails.jpg'
import BlackFingerNails from '../assets/BlackFingerNails.jpg'
import ArcrylicNails from '../assets/ArcrylicNails.jpg'
import FingerNails1 from '../assets/FingerNails1.jpg'
import FingerNails2 from '../assets/FingerNails2.jpg'
import FingerNails3 from '../assets/FingerNails3.jpg'
import ToeNails1 from '../assets/FingerNails1.jpg'
import BlackToeNails from '../assets/BlackToeNails.jpg'
import ToeNails2 from '../assets/ToeNails2.jpg'
import Gele1 from '../assets/Gele1.jpg'
import Gele2 from '../assets/Gele2.jpg'

class Service extends Component {
  render() {
    return (
      <div>
        <section className={`${styles.man}`}>
          <h1 className={`${styles.man_h}`}>Manicure</h1>
          <div className={`${styles.man_d_1}`}>
            <article className={`${styles.man_i_1}`}><img src={BridalNails} alt="" width={250} height={200}/></article>
            <article className={`${styles.man_i_2}`}><img src={BlackFingerNails} alt="" width={250} height={200}/></article>
            <article className={`${styles.man_i_3}`}><img src={ArcrylicNails} alt="" width={250} height={200}/></article>
          </div>
          <div className={`${styles.man_d_2}`}>
            <article className={`${styles.man_i_4}`}><img src={FingerNails1} alt="" width={250} height={200}/></article>
            <article className={`${styles.man_i_5}`}><img src={FingerNails2} alt="" width={250} height={200}/></article>
            <article className={`${styles.man_i_6}`}><img src={FingerNails3} alt="" width={250} height={200}/></article>
          </div>
          <button className={`${styles.man_btn}`}>Book a service</button>
        </section>
        <section className={`${styles.ped}`}>
          <h1 className={`${styles.ped_h}`}>Pedicure</h1>
          <div>
            <article className={`${styles.ped_i_1}`}><img src={ToeNails1} alt="" width={250} height={200}/></article>
            <article className={`${styles.ped_i_2}`}><img src={BlackToeNails} alt="" width={250} height={200}/></article>
            <article className={`${styles.ped_i_3}`}><img src={ToeNails2} alt="" width={250} height={200}/></article>
          </div>
          <button className={`${styles.ped_btn}`}>Book a service</button>
        </section>
        <section className={`${styles.gele}`}>
          <h1 className={`${styles.gele_h}`}>Make-Up and Gele</h1>
          <div>
            <article className={`${styles.gele_i_1}`}><img src={Gele1} alt="" width={250} height={200}/></article>
            <article className={`${styles.gele_i_2}`}><img src={Gele2} alt="" width={250} height={200}/></article>
          </div>
          <button className={`${styles.gele_btn}`}>Book a service</button>
        </section>
      </div>
    )
  }
}

export default Service
