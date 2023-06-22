import React from 'react';
import '../styles/base.css';
import { FaInstagram, FaFacebook, FaWhatsapp, FaApplePay, FaCcMastercard, FaCcVisa } from "react-icons/fa";

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
                    <div className="col_4a">
                        <article className="fb_icon"><a href="https://www.facebook.com/profile.php?id=100069764238812&mibextid=ZbWKwL" target="_blank" rel = 'noreferrer'> <FaFacebook /> </a></article>
                        <article className="WA_icon"><a href="https://api.whatsapp.com/send/?phone=2348161512011&text&type=phone_number&app_absent=0" target="_blank" rel = 'noreferrer'> <FaWhatsapp /> </a></article>
                        <article className="inst_icon"><a href="https://instagram.com/justhairandaccessoriessalon?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel = 'noreferrer'> <FaInstagram /> </a></article>
                    </div>
                </div>
            </section>
            <section className="second_section">
                <div className="col_5">
                    <div className="col_5a">
                        <article>copyright ©</article>
                    </div>
                    <div className="col_5b">
                        <article className="m_card"><FaCcMastercard /></article>
                        <article className="a_pay"><FaApplePay /></article>
                        <article className="v_card"><FaCcVisa /></article>
                    </div>
                </div>
            </section>
      </footer>

    </div>
  )
}

export default Base
