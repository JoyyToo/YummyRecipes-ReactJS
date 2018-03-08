import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div style={{textAlign: 'center'}}>
    <h1>Oops</h1>
    <div>
        <h2 >Page Not Found, 404. Sorry, there is nothing here.</h2>
        <div>
          Visit our <button><Link to="/" >HOMEPAGE</Link></button></div>
          </div>
        </div>
  );

export default NotFound;