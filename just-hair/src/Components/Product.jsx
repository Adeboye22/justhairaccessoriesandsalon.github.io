import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/product.css'
import Bigen from '../assets/Bigen.jpg'

function Product() {
    return (
      <div>
        <section className="hairCare">
          <div className="hairCare_1">
            <img src={Bigen} alt="" />
            <article>
              <span></span>
            </article>
            <button type="submit">Buy now</button>
          </div>
          <div>
            <article></article>
            <span></span>
            <button type="submit"></button>
          </div>
          <div>
            <article></article>
            <span></span>
            <button type="submit"></button>
          </div>
          <div>
            <article></article>
            <span></span>
            <button type="submit"></button>
          </div>
        </section>
      </div>
    )
}

export default Product
