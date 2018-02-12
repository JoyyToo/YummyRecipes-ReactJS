import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import {notify} from 'react-notify-toast'
import axios from 'axios';
import * as constant from "../constant";
import './Register.css'


class NewPassword extends Component {
    constructor (props) {
        super(props);
    this.state = {
        token: '',
        newpassword: '',
    }
}

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    } 

    handleNewPassword = (event) => {
        const payload = new FormData()
        payload.set('token', this.state.token)  
        payload.set('newpassword', this.state.newpassword)  

            const token = this.state

            axios.post(`http://127.0.0.1:5000/api/v1/auth/new-password/${token}`, payload)
            // axios({
            //     url: 'http://127.0.0.1:5000/api/v1/auth/new-password/{token}',
            //     method: 'post',
            //     data: payload,
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     }
            // })
    
            .then((response) => {
                {
                    console.log(response.data)
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

                        <TextField floatingLabelText="Token" name="token" 
                                value={this.state.token} style={style} onChange={this.handleInputChange}/><br />

                        <TextField floatingLabelText="New Password" name="newpassword" 
                                value={this.state.newpassword} style={style} onChange={this.handleInputChange}/><br />

                        <button className="network" id="one" 
                                onClick={(event => this.handleNewPassword(event))}>RESET</button>
                </Paper><br />                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default NewPassword;