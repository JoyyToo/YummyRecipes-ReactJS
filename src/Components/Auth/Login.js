import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import {notify} from 'react-notify-toast'
import axios from 'axios';
import * as constant from "../constant";
import './Register.css'


class Login extends Component {
    constructor (props) {
        super(props);
    this.state = {
        email: '',
        password: ''
    }
}

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleLogin = (event) => {
    const payload = new FormData()
    payload.set('email', this.state.email)    
    payload.set('password', this.state.password,)

        axios({
            url: `${constant.URL}/auth/login`,
            method: 'post',
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

        .then((response) => {
            localStorage.setItem('token', response.data.jwt_token);
            console.log(response.data.jwt_token)
            notify.show(response.data.message, 'success', 4000);
            this.props
            .history
            .push('/');
        })

        .catch((error) => {
            notify.show(error.response.data.message, 'error', 4000);
        });
    }

    render(){
        let style = {
            marginLeft: 20,
            width: 323,
          };
        let divstyle = {
            width: 430,
            margin: 'auto',
            textAlign: 'left',
            paddingLeft: 20,
        }
        return (
            <MuiThemeProvider>
            <div className="main">
                <div className="tab-group">
                <Link to="/register">
                    <li className="tab">Sign Up</li></Link>
                <Link to="/login">
                    <li className="tab active">Log In</li></Link>
                </div>
                <div className="inputs">
                <Paper zDepth={2} style={divstyle}>
                    <p className="heading">Login Here</p>

                    <i className="material-icons">mail</i>
                        <TextField floatingLabelText="Email" name="email" 
                                value={this.state.email} style={style} onChange={this.handleInputChange}/><br />

                    <i className="material-icons">lock</i>
                        <TextField floatingLabelText="Password" name="password" 
                        value={this.state.password} style={style} onChange={this.handleInputChange} /><br /><br /><br />

                    <div className="buttons">
                    <button className="network" id="one" 
                                onClick={(event => this.handleLogin(event))}>LOGIN</button>
                    <Link to="/register"><button className="network" id="two">Cancel</button></Link>
                    
                    <p>Don't have an account? <Link to="/register" type="button" id="button">Register Now!</Link>
                    < br />< br />
                    <Link to="" style={{color:'#1ab188', fontSize:'14px'}} 
                                onClick={(event => this.handleResetPassword(event))}>Forgot password?</ Link></p><br />
                    </div>

                </Paper><br />
                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }}

export default Login;