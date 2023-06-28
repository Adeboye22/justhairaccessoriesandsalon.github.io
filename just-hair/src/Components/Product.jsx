import React from 'react'
import '../styles/product.css'
// import Bigen from '../assets/Bigen.jpg'
// import Adore from '../assets/Adore.jpg'
// import CantuSheaButter from '../assets/CantuSheaButter.jpg'
// import KissExpress from '../assets/KissExpress.jpg'

const Product = ({products}) => {

  return (
    <div>
      {/* hair care section */}
      <section className="sec_1">
        <h1>Hair Care Products</h1>
        {products.map((item) =>(
          <div className="hairCare">
            <div className="hairCare_col_A">
              <div className="hairCare_1">
                <img src={item.image} alt="" />
                <article>
                  <h4>{item.product}</h4>
                  <span className='spn_1'><em>Description:</em> {item.description}</span>
                </article>
                <button className='prodBtn_1' type="submit">Buy now</button>
              </div>
              <div className="hairCare_2">
                <img src={item.image} alt="" />
                <article>
                  <h4>{item.products.product}</h4>
                  <span className='spn_2'><em>Description:</em> {item.description}</span>
                </article>
                <button className='prodBtn_2'>Buy now</button>
              </div>
            </div>
            <div className="hairCare_col_B">
              <div className="hairCare_3">
                <img src={item.image} alt="" />
                <article>
                  <h4>{item.product}</h4>
                  <span className='spn_3'><em>Description:</em> {item.description}</span>
                </article>
                <button className='prodBtn_3' type="submit">Buy now</button>
              </div>
              <div className="hairCare_4">
                <img src={item.image} alt="" />
                <article>
                  <h4>{item.product}</h4>
                  <span className='spn_4'><em>Description:</em> {item.description} </span>
                </article>
                <button className='prodBtn_4' type="submit">Buy now</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Product
