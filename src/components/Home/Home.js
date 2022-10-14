import Button from 'react-bootstrap/Button';
import React from 'react';
import Images from '../Images/9520103_R_Z001A.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-text">
                <h1>Your next phone</h1>
                <h1 id='color'>Your best phone</h1>
                <p>A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.</p>
                    <Button variant="info">Live Demo</Button>
            </div>
            <div className="home-img">
                <img src={Images} alt="" />
            </div>
        </div>
    );
};

export default Home;