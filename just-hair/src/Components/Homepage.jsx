import React from 'react'
import { useNavigate} from 'react-router-dom'
import '../styles/homepage.css'
import PercentA from '../assets/PercentA.jpg'
import PercentB from '../assets/PercentB.jpg'
import PercentC from '../assets/PercentC.jpg'
import PercentD from '../assets/PercentD.jpg'
import PercentOff from '../assets/Percentoff.jpg'
import PixieCut from '../assets/PixieCut.jpg'
import HolidayInspiredLooks from '../assets/HolidayInspiredLooks.jpg'
import BobCut from '../assets/BobCut.jpg'

const Homepage = () => {
  let navigate = useNavigate();
  
  const servicePage = () => {
    navigate('/Service');
  }

  const productPage =() => {
    navigate('/Product')
  }

  
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
          <button onClick = {productPage}>Check Now</button>
        </div>
        <div className='heroImg'></div>
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
          <div className="col_b_1a">
            <article className="bob_cut"><img src={BobCut} alt={"bob cut"} width={250} height={200}/></article>
            <article className="hol_ins_lks"><img src={HolidayInspiredLooks} alt="" width={250} height={200}/></article>
          </div>
          <div className="col_b_1b">
            <article className="pix_ct"><img src={PixieCut} alt="" width={250} height={200}/></article>
            <article className="per_off"><img src={PercentOff} alt="" width={250} height={200}/></article>
          </div>
          
        </div>
        <div className="col_b_2">
          <div className="col_b_2a">
            <article className="per_A"><img src={PercentA} alt="" width={250} height={200}/></article>
            <article className="per_B"><img src={PercentB} alt="" width={250} height={200}/></article>
          </div>
          <div className="col_b_2b">
            <article className="per_C"><img src={PercentC} alt="" width={250} height={200}/></article>
            <article className="per_D"><img src={PercentD} alt="" width={250} height={200} /></article>
          </div>
        </div>
        <div className="btn_VA">
          <button onClick = {servicePage}>View All</button>
        </div>
        {/* About us section */}
        <div className="Abt_us">
          <h3>About us</h3>
          <p>
            &nbsp; Just Hair and Accessories Salon is your one-stop salon located in Warri, Delta state. Our amazing selection of high quality wigs and hair products makes us the perfect choice for those in need of top-notch hair services. We offer all feminine hair services with any hair type or style, from edgy to classic, and straight to curly, short or long. We also have a variety of different hair pieces from lace front wigs to ponytails. Our salon is properly equipped with modern infrastructures to give you an unforgettable experience. Our expert stylists will nourish your hair, ensuring the quality of your cut will last your busy lifestyle. The goal is to deliver to you top notch services, elevate your look, and have you depart our salon with a premium style.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Homepage

