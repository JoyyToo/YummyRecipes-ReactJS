import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {notify} from 'react-notify-toast'
import axios from 'axios';
import * as constant from "./constant";
import './Landing.css'

class Nav extends Component {

    handleLogout = (event) => {
        window.localStorage.clear()
        notify.show('You logged out successfully.', 'success', 4000)
    }
    
    render() {
        const Accesstoken = window.localStorage.token

        return (
            
            <div className="container">
            <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}><h2>YUMMY

            { !Accesstoken ? (
                        ''
                    ) : (

                        <Link to="/categories" className="navbar-brand" style={{ float: 'right', marginRight: 40, textDecoration: 'none' }}
                         >CATEGORIES
                        <Link to="/" className="navbar-brand" style={{ float: 'right', marginRight: 40,  marginLeft: 30,  textDecoration: 'none' }}
                              onClick={(event => this.handleLogout(event))} >LOGOUT</Link></Link>

                    )}

            <a className="navbar-brand" style={{ float: 'right',  marginRight: 20, color: 'white'}}>           
                Hello
                { !Accesstoken ? (
                    ' Guest'
                ) : (
                    ' ' + localStorage.getItem('username')
                )}
            </a>
            </h2>
            </Link>

            </div>
        )
    }}

    export default Nav;
