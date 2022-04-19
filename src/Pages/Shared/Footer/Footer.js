import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faMapLocation, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Footer.css'

const Footer = () => {

    return (
        <footer className='footer mt-5 bg-black text-white pt-5 pb-5 w-100'>
            <div className='container  d-flex justify-content-between'>
                <div className='support w-25 p-2'>
                    <h6 className='text-danger'>Support</h6>
                    <p><small>Help Center</small></p>
                    <p><small>FAQ</small></p>
                    <p><small>Ticket support</small></p>
                    <p><small>Contact Us</small></p>
                    <p><small>Forum</small></p>
                </div>
                <div className='about w-25 p-2'>
                    <h6 className='text-danger'>About</h6>
                    <p><small>Our Dental Team</small></p>
                    <p><small>Pricing & PriceLish</small></p>
                    <p><small>Solutions</small></p>
                    <p><small>Dental Services</small></p>
                    <p><small>Clients</small></p>
                </div>
                <div className='contact '>
                    <h6 className='text-danger p-2'>Contact info</h6>
                    <p>Visit DentiCare on these social links connect with us. Make sure to follow our accouts for regular updates.</p>
                    <p><FontAwesomeIcon className='me-2 text-danger' icon={faPhone}></FontAwesomeIcon>01883-061967</p>
                    <p><FontAwesomeIcon className='me-2 text-danger' icon={faEnvelope}></FontAwesomeIcon>mohammadazimuddin274@gmali.com</p>
                    <p><FontAwesomeIcon className='me-2 text-danger' icon={faMapMarker}></FontAwesomeIcon> Level-2, 36, Awal Centre, Feni, Dhaka</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;