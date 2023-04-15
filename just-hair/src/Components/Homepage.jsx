import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/homepage.module.css'

class Homepage extends Component {
  render() {
    return (
      <div>
        {/* div for free delivery */}
        <div className={`${styles.free_del}`}>
          <div>Free delivery on orders over N200,000</div>
          <div>7 working days free return</div>
          <div>72 hours delivery</div>
        </div>
        {/* div for hero page */}
        <div className={`${styles.hero}`}>
          <div>
            <span>New Arrivals</span>
            <span>Up to 20% discount</span>
            <button>Check Now</button>
          </div>
          <img src="" alt="" />
        </div>
        <div className={`${styles.btn_3}`}>
          <button>Lace Front Wigs</button>
          <button>Glueless HD Wigs</button>
          <button>Sew-in Weaves</button>
        </div>
        {/* Must have choices */}
        <div className={`${styles.choices}`}>
          <div className={`${styles.choices_1}`}>
            <article><img src="" alt="" /></article>
            <article><img src="" alt="" /></article>
            <article><img src="" alt="" /></article>
            <article><img src="" alt="" /></article>
          </div>
          <div className={`${styles.choices_2}`}>
            <article><img src="" alt="" /></article>
            <article><img src="" alt="" /></article>
            <article><img src="" alt="" /></article>
            <article><img src="" alt="" /></article>
          </div>
          {/* view all button */}
          <div className={`${styles.btn_VA}`}><button>View All</button></div>
          <h1>About us</h1>
        </div>
      </div>
    )
  }
}

export default Homepage

