import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import './Register.css'
import Paper from 'material-ui/Paper';


class Login extends Component {
    state = {
        email: '',
        password: ''
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
                    <li className="tab active">Sign Up</li></Link>
                <Link to="/login">
                    <li className="tab">Log In</li></Link>
                </div>
                <div className="inputs">
                <Paper zDepth={2} style={divstyle}>
                    <p class="heading">Login Here</p>

                    <i class="material-icons">mail</i>
                        <TextField floatingLabelText="Email" style={style} /><br />

                    <i class="material-icons">lock</i>
                        <TextField floatingLabelText="Password" style={style} /><br /><br /><br />

                    <div className="buttons">
                    <Link to="/addcategory"><button className="network" id="one">LOGIN</button></Link>
                    <Link to="/register"><button className="network" id="two">Cancel</button></Link>
                    
                    <p>Don't have an account?</p>
                    <Link to="/register" type="button" id="button">Register Now!</Link>
                    </div>

                </Paper><br />
                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }}

export default Login;