import React from 'react';
import './Service.css'
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {id, name, img, price, description } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = () => {
        navigate();
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>{description}</p>

                <Link to='/health-problem'>
                    <button onClick={() => navigateToServiceDetail(id)} className=' btn btn-primary w-50'>{name}</button>
                </Link>
                {/* <button onClick={() => navigateToServiceDetail(id)} className=' btn btn-primary w-50'>{name}</button> */}
            </div>
        </div>
    );
};

export default Service;