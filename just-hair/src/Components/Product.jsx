import React from 'react'
import '../styles/product.css'

const Product = ({products}) => {

  return (
    <div className="productComponent">
      <h2 className="hairCare">Hair Products</h2>
      <div className="product">
        {products.map((item, index) => (
          <div className="productsFrame">
              <img src={item.image} alt="" className="productImg" />
              <p className="productName">{item.product}</p>
              <hr  className="line-break" />
              <p className="productDescription"><span className='span-description'>Description:</span> {item.description}</p>
              <p className="productCategory"><span className="span-category">Category:</span> {item.category}</p>
              <p className="productPrice"><span className="span-price">Price:</span> N{item.price}</p>
              <button className="selectItem"> Purchase</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
