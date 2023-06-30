import React from 'react'
import '../styles/Checkout.css'

const Checkout = () => {
  return (
    <div cslassName = 'checkout'>
      <form action="" method="post">
        <p className="clientFirstName">First Name:</p>
        <input type="text" placeholder="Enter your first name" id="" />
        <p className="clientLastName">Last Name:</p>
        <input type="text" placeholder="Enter your last name" />
        <p className="clientProduct">Product</p>
        <input type="text" />
      </form>
    </div>
  )
}

export default Checkout
