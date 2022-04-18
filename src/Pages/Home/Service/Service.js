import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p>{description}</p>
                <button className='service-btn bg-primary text-white'>{name}</button>
            </div>
        </div>
    );
};

export default Service;