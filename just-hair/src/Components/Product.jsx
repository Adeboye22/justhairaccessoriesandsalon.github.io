import React from 'react'
import '../styles/product.css'
import Bigen from '../assets/Bigen.jpg'
import Adore from '../assets/Adore.jpg'
import CantuSheaButter from '../assets/CantuSheaButter.jpg'
import KissExpress from '../assets/KissExpress.jpg'

const Product = () => {
  return (
    <div>
      {/* hair care section */}
      <section className="sec_1">
      <h1>Hair Care Products</h1>
        <div className="hairCare">
          <div className="hairCare_col_A">
              <div className="hairCare_1">
                <img src={Bigen} alt="" />
                <article>
                  <h4>Bigen</h4>
                  <span className='spn_1'><em>Description:</em> Bigen</span>
                </article>
                <button className='prodBtn_1' type="submit">Buy now</button>
              </div>
              <div className="hairCare_2">
                <img src={Adore} alt="" />
                <article>
                  <h4>Adore</h4>
                  <span className='spn_2'><em>Description:</em> Adore</span>
                </article>
                <button className='prodBtn_2' type="submit">Buy now</button>
              </div>
          </div>
          <div className="hairCare_col_B">
            <div className="hairCare_3">
              <img src={CantuSheaButter} alt="" />
              <article>
                <h4>Cantu Shea Butter</h4>
                <span className='spn_3'><em>Description:</em> Cantu Shea Butter</span>
              </article>
              <button className='prodBtn_3' type="submit">Buy now</button>
            </div>
            <div className="hairCare_4">
              <img src={KissExpress} alt="" />
              <article>
                <h4>Kiss Express</h4>
                <span className='spn_4'><em>Description:</em> Kiss Express</span>
              </article>
              <button className='prodBtn_4' type="submit">Buy now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
