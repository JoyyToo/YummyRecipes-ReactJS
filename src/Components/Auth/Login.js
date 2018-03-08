import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import {notify} from 'react-notify-toast'
import axiosInstance from '../Constants/Axioscall';
import '../styles.css'


class Login extends Component {
    // initialize state
    constructor (props) {
        super(props);
    this.state = {
        email: '',
        password: '',
        open: false,
    }
}

    // handle user input
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    // handle login request
    handleLogin = (event) => {
    const payload = new FormData()
    payload.set('email', this.state.email)    
    payload.set('password', this.state.password,)
        
        // send POST request to API
        axiosInstance.post('auth/login', payload)

        .then((response) => {
            localStorage.setItem('token', response.data.jwt_token);
            notify.show(response.data.message, 'success', 4000);
            this.props
            .history
            .push('/');
        })

        .catch((error) => {
            notify.show(error.response.data.message, 'error', 4000);
        });
    }

    // handle reset password request
    handleResetPassword = (event) => {
        const payload = new FormData()
        payload.set('email', this.state.email)    
    
            // send POST request to API
            axiosInstance.post('auth/reset-password', payload)
    
            .then((response) => {
                    notify.show(response.data.message, 'success', 4000);
                    this.props
                    .history
                    .push('/')             
            })
    
            .catch((error) => {         
                notify.show(error.response.data.message, 'error', 4000);
               
            });
        }

    // handle open modal
    handleOpen = () => {
        this.setState({open: true});
      };
    
    // handle close modal
    handleClose = () => {
        this.setState({open: false});
    };

    // render login form
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
        };
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleResetPassword.bind(this)}
            />,
          ];
        return (
            <MuiThemeProvider>
        <Dialog
          title="Reset Password"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            floatingLabelText="Email"
        />

        </Dialog>
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
                    <div className="text">
                    <i className="material-icons">mail</i>
                        <TextField floatingLabelText="Email" name="email" 
                                value={this.state.email} style={style} onChange={this.handleInputChange}/><br />

                    <i className="material-icons">lock</i>
                        <TextField floatingLabelText="Password" type="password" name="password" 
                        value={this.state.password} style={style} onChange={this.handleInputChange} /><br /><br /><br />
                    </div>
                    <div className="buttons">
                    <button className="network" id="one" 
                                onClick={(event => this.handleLogin(event))}>LOGIN</button>
                    <Link to="/register"><button className="network" id="two">Cancel</button></Link>
                    
                    <p>Don't have an account? <Link to="/register" type="button" id="button">Register Now!</Link>
                    < br />< br />
                    <button style={{color:'#1ab188', fontSize:'14px'}} 
                                onClick={(event => this.handleOpen(event))}>Forgot password?</ button></p><br />
                    </div>

                </Paper><br />
                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }}

export default Login;