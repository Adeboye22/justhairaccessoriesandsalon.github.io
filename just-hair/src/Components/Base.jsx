import React from 'react';
import '../styles/base.css';

function Base() {
  return (
    <div>
      <footer>
        <hr />
            <section className="first_section">
                <div className="col_1">
                    <h4>Customer Service</h4>
                    <article>Contact Us</article>
                    <article>Track my Order</article>
                    <article>Returns</article>
                    <article>FAQ</article>
                </div>
                <div className="col_2">
                    <h4>More Information</h4>
                    <article>Beauticians</article>
                    <article>Privacy policy</article>
                    <article>Delivery rates.</article>
                </div>
                <div className="col_3">
                    <h4>Explore</h4>
                    <article>Hair & wig guides</article>
                    <article>Track your order</article>
                </div>
                <div className="col_4">
                    <h4>Stay connected</h4>
                </div>
            </section>
            <section className="second_section">
                <div>
                    <article>copyright ©</article>
                    <article></article>
                </div>
            </section>
      </footer>

    </div>
  )
}

export default Base
