import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/homepage.css'
import PercentA from '../assets/PercentA.jpg'
import PercentB from '../assets/PercentB.jpg'
import PercentC from '../assets/PercentC.jpg'
import PercentD from '../assets/PercentD.jpg'
import PercentOff from '../assets/Percentoff.jpg'
import PixieCut from '../assets/PixieCut.jpg'
import HeroSection from '../assets/HeroSection.jpg'
import HolidayInspiredLooks from '../assets/HolidayInspiredLooks.jpg'
import BobCut from '../assets/BobCut.jpg'

class Homepage extends Component {
  ProductPage = () => {
    prompt("Enter a name: ")
  }
  render() {
    return (
      <div>
        {/* top section */}
        <div className="col_a">
          <div className="col_a_1">Free delivery on orders over N200,000</div>
          <div className="col_a_2">7 working days free return</div>
          <div className="col_a_3">72 hours delivery</div>
        </div>
        {/*  hero section */}
        <div className="hero">
          <div className="hero_a">
            <h3>New Arrivals</h3>
            <span>Up to 20% discount</span><br/>
            <button onClick={this.ProductPage}>Check Now</button>
          </div>
          <img src={HeroSection} alt=""  />
        </div>
        {/* buttons to products */}
        <div className="btn_3">
          <button className="btn_3_a">Lace Front Wigs</button>
          <button className="btn_3_b">Glueless HD Wigs</button>
          <button className="btn_3_c">Sew-in Weaves</button>
        </div>
        {/* Product display */}
        <div className="col_b">
          <div className="col_b_1">
            <article className="bob_cut"><img src={BobCut} alt={"bob cut"} width={250} height={200}/> <br/><span>Bob Cut</span></article>
            <article className="hol_ins_lks"><img src={HolidayInspiredLooks} alt="" width={250} height={200}/><br/><span>Holiday Inspired Looks</span></article>
            <article className="pix_ct"><img src={PixieCut} alt="" width={250} height={200}/><br/><span>Pixie Cut</span></article>
            <article className="per_off"><img src={PercentOff} alt="" width={250} height={200}/></article>
          </div>
          <div className="col_b_2">
            <article className="per_A"><img src={PercentA} alt="" width={250} height={200}/></article>
            <article className="per_B"><img src={PercentB} alt="" width={250} height={200}/></article>
            <article className="per_C"><img src={PercentC} alt="" width={250} height={200}/></article>
            <article className="per_D"><img src={PercentD} alt="" width={250} height={200} /></article>
          </div>
          <div className="btn_VA"><button>View All</button></div>
          {/* About us section */}
          <div className="Abt_us">
            <h3>About us</h3>
            <p>
              &nbsp; Just Hair and Accessories Salon is your ultimate beauty store where you can shop in Warri, Delta state. Our amazing selection of high quality, yet affordable wigs; besides the
              hundreds of wig styles, we also carry a variety of different hair pieces from lace front wigs to ponytails. No matter your style, let Just Hair and Accessories Salon introduce
              you to the best hair extensions and wigs online and onsite.
              &nbsp; Our selection is curated with everything you need to buy wigs online. Improve your Look with Just Hair and Accessories. It's all up to you with breadth-taking, sexy, and stunning styles.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage

