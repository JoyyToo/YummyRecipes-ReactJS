import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

const landing = () => {
    return  (
    <div className="App">
        <div className="intro-message">
            <h1 >Yummy recipes</h1> <br />
            <h2>Makes your cooking easier and better</h2>
            <hr class="intro-divider" />
        </div>
        <div className="list-inline intro-social-buttons">
            <div className="list-inline-item">
                <Link to="/login">
                <button className="network-name">LOG IN</button></Link>
                <Link to="/register">
                <button className="network-name">SIGN UP</button></Link>
            </div>
        </div>

    </div>
    )
};

export default landing;

