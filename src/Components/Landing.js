import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

const landing = () => { 
    const Accesstoken = window.localStorage.token

    return  (       
    <div className="App">
        <div className="intro-message">
            <h1 >Yummy recipes</h1> <br />
            <h2>Makes your cooking easier and better</h2>
            <hr className="intro-divider" />
        </div>
        <div className="list-inline intro-social-buttons">
            <div className="list-inline-item">
                { !Accesstoken ? (
                    <div>
                        <Link to="/login">
                        <button className="network-name">LOG IN</button></Link>
                        <Link to="/register">
                        <button className="network-name">SIGN UP</button></Link>
                    </div>
                    ) : (
                        <div>
                        <Link to="/addcategory">
                        <button className="network-name">ADD CATEGORIES</button></Link>
                    
                        <Link to="/categories">
                        <button className="network-name">VIEW CATEGORIES</button></Link>
                        </div>
                )}
  
            </div>
        </div>
        <div className="copyright">
            <p>Copyright &copy; Yummy Recipes 2018. All Rights Reserved</p>
        </div>

    </div>
    )
};

export default landing;

