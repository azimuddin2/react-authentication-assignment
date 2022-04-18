import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const  [] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserLoginIn = event => {
        event.preventDefault();
        // signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='container w-50 mx-auto border p-5 mt-5 rounded-3 bg-light'>
            <h2 className='text-success text-center mb-4'>Please Login</h2>
            <Form onSubmit={handleUserLoginIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="success" type="submit">
                    Login
                </Button>
            </Form>
            <p className='link-title'>
            Create New Account? <Link className='form-link' to='/register'>Register Now</Link>
            </p>
        </div>
    );
};

export default Login;