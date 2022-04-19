import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='mt-5 bg-black text-white p-5'>
            <div className='container  d-flex justify-content-between'>
                <div className='support w-25 col-sm-12'>
                    <h6>Support</h6>
                    <p><small>Help Center</small></p>
                    <p><small>FAQ</small></p>
                    <p><small>Ticket support</small></p>
                    <p><small>Contact Us</small></p>
                    <p><small>Forum</small></p>
                </div>
                <div className='about w-25'>
                    <h6>About</h6>
                    <p><small>Our Dental Team</small></p>
                    <p><small>Pricing & PriceLish</small></p>
                    <p><small>Solutions</small></p>
                    <p><small>Dental Services</small></p>
                    <p><small>Clients</small></p>
                </div>
                <div className='contact w-50'>
                    <h6>Contact info</h6>
                    <p>Visit DentiCare on these social links connect with us. Make sure to follow our accouts for regular updates.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;