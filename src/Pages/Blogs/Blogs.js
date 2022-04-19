import React from 'react';

const Blogs = () => {
    return (
        <div className=' m-5'>
            <div className='border rounded-3 p-5 mb-4'>
            <h2>Question 01. Difference between authorization and authentication?</h2>
            <p>Authorization : Authentication works through passwords, one-time pins, biometric information
                Authentication is visible to and partially changeable by the user.</p>
            <p>Authentication : Authorization works through settings that are implemented and maintained by the organization.
                Authorization works through settings that are implemented and maintained by the organization.</p>
            </div>
            <div className='border rounded-3 p-5 mb-4'>
            <h2>Question 02. Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.</p>
            <p>1. Token-based authentication</p>
            <p>2. Certificate-based authentication</p>
            <p>3. Biometric authentication</p>
            </div>
            <div className='border rounded-3 p-5 mb-4'>
            <h2>Question 03. What other services does firebase provide other than authentication</h2>
            <p>*** Firebase to help take your mobile app development a notch higher.</p>
            <p>*** backend as a service (BaaS)</p>
            <p>*** Firebase Dynamic Links reference link for more details and set up.</p>
            </div>
        </div>
    );
};

export default Blogs;