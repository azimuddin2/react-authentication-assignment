import React from 'react';
import {Link, useNavigate } from 'react-router-dom';

const HealthProblem = () => {
    const navigate = useNavigate();

    const handleProceedCheckout = () => {
        navigate();
    }

    return (
        <div>
            <h1>Health Problem!</h1>
            <Link to='/checkout'>
            <button onClick={handleProceedCheckout}>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default HealthProblem;