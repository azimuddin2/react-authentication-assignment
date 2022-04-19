import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleImage from '../../images/social/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement ;

 

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if(user){
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <button
             onClick={() => signInWithGoogle()}
             className='btn border w-50 d-block mx-auto'>
                <img src={googleImage} alt="" />
                Google Sign In
            </button>
        </div>
    );
};

export default SocialLogin;