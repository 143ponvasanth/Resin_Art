import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-description'>
                <h3>Dream Chaser</h3>
                <p>A dream chaser is someone who relentlessly pursues their passions and goals,
                    overcoming obstacles with determination and hard work. They refuse to settle for less,
                    constantly pushing their limits to turn dreams into reality</p>
            </div>
            <div id='About' className='footer-about'>
                <ul>
                    <h5>About Us</h5>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Cares</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-care'>
                <ul>
                    <h5>Customer Care</h5>
                    <li>Help Center</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchasing</li>
                    <li>Returns & Refunds</li>
                </ul>
            </div>
            <div id='Contact' className='footer-contact'>
                <h5>Contact Us</h5>
                <p>70 Washington Square South, New York, NY 10012, United States</p>
                <p>Email: uilib.help@gmail.com</p>
                <p>Phone: +1 1123 456 780</p>
            </div>
        </div>
    )
}

export default Footer
