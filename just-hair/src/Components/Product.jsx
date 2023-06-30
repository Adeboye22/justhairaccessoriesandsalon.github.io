import React from 'react'
import '../styles/product.css'

const Product = ({products}) => {

  return (
    <div className="productComponent">
      <h2 className="hairCare">Hair Products</h2>
      {products.map((item, index) => (
        <div className="products">
            <img src={item.image} alt="" />
            <p className="productName">{item.product}</p>
            <p className="productDescription">{item.description}</p>
            <p className="productCategory">{item.category}</p>
            <p className="productPrice">N{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Product
