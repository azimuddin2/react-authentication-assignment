// import { async } from '@firebase/util';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';


const Login = () => {
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorElement ;

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate('/checkout');
    }

    
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleUserLoginIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async() => {
        await sendPasswordResetEmail(email);
          alert('Sent email');
    }


    return (
        <div className='container w-50 mx-auto border p-5 mt-5 rounded-3 bg-light'>
            <h1 className='text-primary text-center mb-4'>Please Login</h1>
            <Form onSubmit={handleUserLoginIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                    loading && <p>Loading...</p>
                }
                <Button variant="primary mb-4 w-50 d-block mx-auto" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='link-title'>Create New Account? <Link className='form-link' to='/register'>Register Now</Link>
            </p>
            <p className='link-title'>Forget Password? <Link className='form-link' to='' onClick={resetPassword} >Reset Password</Link>
            </p>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;