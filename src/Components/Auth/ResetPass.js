import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import {notify} from 'react-notify-toast'
import axios from 'axios';
import * as constant from "../constant";
import './Register.css'


class ResetPassword extends Component {
    constructor (props) {
        super(props);
    this.state = {
        email: '',
    }
}

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    } 

    handleResetPassword = (event) => {
        const payload = new FormData()
        payload.set('email', this.state.email)    
    
            axios({
                url: `${constant.URL}/auth/reset-password`,
                method: 'post',
                data: payload,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
    
            .then((response) => {
                {
                    notify.show(response.data.message, 'success', 4000);
                    this.props
                    .history;
                }
            
                
            })
    
            .catch((error) => {
                
                notify.show(error.response.data.message, 'error', 4000);
               
            });
        }
    render() {
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
                <div className="inputs">
                <Paper zDepth={2} style={divstyle}>

                    <i className="material-icons">mail</i>
                        <TextField floatingLabelText="Email" name="email" 
                                value={this.state.email} style={style} onChange={this.handleInputChange}/><br />

                        <a style={{color:'#1ab188', fontSize:'14px'}} 
                                onClick={(event => this.handleResetPassword(event))}>Reset</a><br />
                </Paper><br />                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default ResetPassword;