import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import {notify} from 'react-notify-toast'
import '../styles.css'
import axiosInstance from '../Constants/Axioscall';


class Register extends Component {
    // Initialize state
    constructor (props) {
        super(props);
    this.state = {
        username: '',
        email: '',
        password: '',
    }
}

    // handle user input
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    } 

    // handle register user request
    handleRegister = (event) => {
      const payload = new FormData()
      payload.set('email', this.state.email)    
      payload.set('username', this.state.username,)
      payload.set('password', this.state.password,)

        axiosInstance.post('auth/register', payload)

        .then((response) => {
            localStorage.setItem('username', this.state.username)
            notify.show(response.data.message, 'success', 4000);
            this.props
            .history
            .push('/login');
        })

        .catch((error) => {
            if (error.response){
                notify.show(error.response.data.message,'error', 4000);
            }
           
        });
    }

    // render register form
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
                    <p className="heading">Register Here</p>

                    <i className="material-icons">person</i>
                    <TextField floatingLabelText="Username" name="username" 
                                 value={this.state.username} style={style} onChange={this.handleInputChange}/><br />

                    <i className="material-icons">mail</i>
                    <TextField floatingLabelText="Email" name="email" 
                                value={this.state.email} style={style} onChange={this.handleInputChange}/><br />

                    <i className="material-icons">lock</i>
                    <TextField floatingLabelText="Password" type="password" name="password" 
                                 value={this.state.password} style={style} onChange={this.handleInputChange}/><br /><br /><br />

                    <div className="buttons">
                    <button className="network" id="one" onClick={(event => this.handleRegister(event))}
                    >Register</button>
                    <Link to="/"><button className="network" id="two">Cancel</button></Link>
                  
                    <p>Already have an account? <Link to="/login" type="button" id="button" >Login</Link></p>            <br />    
                    </div>

                </Paper><br />
                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }}

export default Register;