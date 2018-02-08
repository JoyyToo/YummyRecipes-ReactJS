import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import '../Auth/Register.css'


class UpdateRecipe extends Component {
    state = {
        name: '',
        time: '',
        ingridients: '',
        procedure: '',
    }

    render(){
        let style = {
            marginLeft: 20,
            width: 440,
          };
        let divstyle = {
            width: 500,
            margin: 'auto',
            textAlign: 'left',
            paddingLeft: 20,
        }
        return (
            <MuiThemeProvider>
            <div className="main">
                <div className="inputs" style={{paddingTop: '60px'}}>
                <Paper zDepth={2} style={divstyle}>
                    <p class="heading"><b>UPDATE RECIPE</b></p>

                    <TextField floatingLabelText="Name" style={style} /><br /><br />
                    <TextField floatingLabelText="Time taken" style={style} /><br /><br />
                    <TextField floatingLabelText="Ingridients" style={style} multiLine={true} rows={3}/><br />
                    <TextField floatingLabelText="Procedure" style={style} multiLine={true} rows={3}/><br />

                    <div className="buttons" id="btnstyle">
                    <button className="network" id="one">UPDATE</button>
                    <Link to="/register"><button className="network" id="two">CANCEL</button></Link>

                    </div>

                    <p>A recipe has no soul. You are the cook, give life to the recipe</p> <br />

                </Paper><br />
                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }}

export default UpdateRecipe;