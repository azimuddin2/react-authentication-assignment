import React from 'react';
import {Link, useNavigate } from 'react-router-dom';

const HealthProblem = () => {
    const navigate = useNavigate();

    const handleProceedCheckout = (id) => {
        navigate(id);
    }

    return (
        <div className='m-5 border p-5 m-5 border rounded-3'>
            <h1 className='mb-4'>Health Problem!</h1>
            <Link to='/checkout'>
            <button className='btn btn-primary' onClick={handleProceedCheckout}>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default HealthProblem;