import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/home')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two  password did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 mx-auto border p-5 mt-5 rounded-3 bg-light'>
        <h2 className='text-primary text-center mb-4'>Please Register</h2>
        <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required/>
            </Form.Group>
            <p style={{ color: 'red' }}>{error}</p>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
        <p className='link-title'>
        Already have an account?<Link className='form-link' to='/login'>Login</Link>
        </p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;