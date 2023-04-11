import React, { Component } from 'react'
import Navigation from './Navigation'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>
          <div>Free delivery on orders over N200,000</div>
          <div>7 working days free return</div>
          <div>72 hours delivery</div>
        </div>
      </div>
    )
  }
}

export default Homepage

