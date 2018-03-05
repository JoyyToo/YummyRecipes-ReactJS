import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {notify} from 'react-notify-toast'
import axios from 'axios';
import * as constant from "./constant";
import './Landing.css'

class Nav extends Component {

    handleLogout = (event) => {
        const token = window.localStorage.getItem('token')

        axios({
            url: `${constant.URL}/auth/logout`,
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        })

        .then((response) => {   
            window.localStorage.clear()      
            console.log(response.data.message)
            notify.show(response.data.message, 'success', 4000)
            this.props
            .history
            .push('/');
        })
        .catch((error) => {
            console.log(error.response.data.message)
            notify.show(error.response.data.message, 'error', 4000);
        });
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
