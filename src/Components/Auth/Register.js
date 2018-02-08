import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import './Register.css'
import Paper from 'material-ui/Paper';


class Register extends Component {
    state = {
        username: '',
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
                    <p class="heading">Register Here</p>

                    <i class="material-icons">person</i>
                    <TextField floatingLabelText="Username" style={style}/><br />

                    <i class="material-icons">mail</i>
                    <TextField floatingLabelText="Email" style={style} /><br />

                    <i class="material-icons">lock</i>
                    <TextField floatingLabelText="Password" style={style} /><br /><br /><br />

                    <div className="buttons">
                    <Link to="/login"><button className="network" id="one">Register</button></Link>
                    <Link to="/"><button className="network" id="two">Cancel</button></Link>
                  
                    <p>Already have an account?</p>
                    <Link to="/login" type="button" id="button">Login</Link>
                    </div>

                </Paper><br />
                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }}

export default Register;