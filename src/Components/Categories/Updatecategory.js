import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import '../Auth/Register.css'
import Paper from 'material-ui/Paper';


class UpdateCategory extends Component {
    state = {
        name: '',
        description: ''
    }

    render(){
        let style = {
            marginLeft: 20,
            width: 340,
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
                <div className="inputs" style={{paddingTop: '150px'}}>
                <Paper zDepth={2} style={divstyle}>
                    <p class="heading"><b>UPDATE CATEGORY</b></p>

                    <TextField floatingLabelText="Name" style={style} /><br /><br />

                    <TextField floatingLabelText="Description" style={style} /><br /><br /><br />

                    <div className="buttons">
                    <button className="network" id="one">UPDATE</button>
                    <Link to="/categories"><button className="network" id="two">CANCEL</button></Link><br /><br /><br />

                    </div>

                </Paper><br />
                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }}

export default UpdateCategory;