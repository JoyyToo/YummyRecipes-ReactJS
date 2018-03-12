import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { notify } from 'react-notify-toast';
import axiosInstance from '../Constants/AxiosCall';
import '../styles.css';


class NewPassword extends Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = {
      newpassword: '',
    };
  }

  // handle user input
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  // handle new password request
  handleNewPassword = () => {
    const payload = new FormData();
    payload.set('newpassword', this.state.newpassword);
    const token = this.props.match.params.token;

    // send POST request to API
    axiosInstance.post(`auth/new-password/${token}`, payload)
      .then((response) => {
        notify.show(response.data.message, 'success', 4000);
        this.props
          .history
          .push('/login');
      })
      .catch((error) => {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  }

  // render new password form
  render() {
    const style = {
      marginLeft: 20,
      width: 323,
    };
    const divstyle = {
      width: 430,
      marginTop: 300,
      margin: 'auto',
      textAlign: 'left',
      paddingLeft: 20,
    };
    return (
      <MuiThemeProvider>
        <div className="main">
          <div className="inputs">
            <Paper zDepth={2} style={divstyle}>
              <p className="heading">New Password Here</p>

              <TextField
                floatingLabelText="New Password"
                name="newpassword"
                value={this.state.newpassword}
                style={style}
                type="password"
                onChange={this.handleInputChange}
              /><br />

              <button
                className="network"
                id="one"
                onClick={(event => this.handleNewPassword(event))}
              >RESET
              </button>
            </Paper><br />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NewPassword;
