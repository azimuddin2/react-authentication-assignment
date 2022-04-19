import React from 'react';
import personnalImage from '../../images/personal-image.jpg'

const About = () => {
    return (
        <div className=' border rounded-3 p-5 m-5'>
            <row className=''>
               <div className='col col-sm-12 col-lg-6'>
               <img className='w-75  rounded-3' src={personnalImage} alt="" />
               </div>
                <div className=' mt-2 col col-sm-12 col-lg-6'>
                    <h2 className='mt-3'>Name: MD. AZIM UDDIN</h2>
                    <p>I want to be a full stack developer.
                        I have a target to finish in 6 months Inshallah.
                        The main goal of my life is to succeed in full web development and increase work efficiency</p>
                        <button className='btn btn-primary'>About Us</button>
                </div>
            </row>

        </div>
    );
};

export default About; <h1>This is About!</h1>