import React from 'react';
import styles from '../styles/base.module.css';

function Base() {
  return (
    <div>
      <footer>
        <hr />
            <section className={`${styles.first_section}`}>
                <div className={`${styles.col_1}`}>
                    <h4>Customer Service</h4>
                    <article>Contact Us</article>
                    <article>Track my Order</article>
                    <article>Returns</article>
                    <article>FAQ</article>
                </div>
                <div className={`${styles.col_2}`}>
                    <h4>More Information</h4>
                    <article>Beauticians</article>
                    <article>Privacy policy</article>
                    <article>Delivery rates.</article>
                </div>
                <div className={`${styles.col_3}`}>
                    <h4>Explore</h4>
                    <article>Hair & wig guides</article>
                    <article>Track your order</article>
                </div>
                <div className={`${styles.col_4}`}>
                    <h4>Stay connected</h4>
                </div>
            </section>
            <section className={`${styles.second_section}`}>
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
