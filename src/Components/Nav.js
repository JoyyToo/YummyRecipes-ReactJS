import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

const nav = () => {
    return (
        <div className="container">
        <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}><h2>YUMMY</h2></Link>
        </div>
    )
};

export default nav;
