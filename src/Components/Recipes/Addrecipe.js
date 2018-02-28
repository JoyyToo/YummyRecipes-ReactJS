import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import {notify} from 'react-notify-toast'
import axios from 'axios';
import * as constant from "../constant";
import '../Auth/Register.css'


class AddRecipe extends Component {
    state = {
        name: '',
        time: '',
        ingredients: '',
        procedure: '',
        id: '',
        category_id: '',
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    componentDidMount() {
        this.setState({
            token: window.sessionStorage.accessToken,
        });
        const token = window.localStorage.getItem('token');
        if (!token) {
            window.location.replace('/login')
        }
    }

    handleAddrecipe = (event) => {
    const category_id = this.props.match.params['category_id'];
    const payload = new FormData()
    payload.set('name', this.state.name)    
    payload.set('time', this.state.time,)
    payload.set('ingredients', this.state.ingredients,)
    payload.set('procedure', this.state.procedure,)
        
    const token = window.localStorage.getItem('token')
   
        axios({
            url: `${constant.URL}/category/${category_id}/recipes`,
            method: 'post',
            data: payload,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        })

        .then((response) => {
            notify.show(response.data.message, 'success', 4000);
            this.props
            .history
            .push(`/categories/${category_id}/recipes`);
        })

        .catch((error) => {
            notify.show(error.response.data.message, 'error', 4000);
        });
    }


    render(){
        const id = this.state.id
        console.log(id)
        const category_id = this.props.match.params['category_id'];

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
                    <p class="heading"><b>ADD RECIPE</b></p>

                    <TextField floatingLabelText="Name" name="name" 
                                 value={this.state.name} style={style} onChange={this.handleInputChange}/><br /><br />
                                 
                    <TextField floatingLabelText="Time taken" name="time" 
                                 value={this.state.time} style={style} onChange={this.handleInputChange}/><br /><br />

                    <TextField floatingLabelText="Ingredients" name="ingredients" 
                                 value={this.state.ingredients} style={style} multiLine={true} rows={3}
                                 onChange={this.handleInputChange} /><br />

                    <TextField floatingLabelText="Procedure" name="procedure" 
                                 value={this.state.procedure} style={style} multiLine={true} rows={3}
                                 onChange={this.handleInputChange} /><br />

                    <div className="buttons" id="btnstyle">
                    <button className="network" id="one" onClick={(event => this.handleAddrecipe(event))}>ADD</button>
                    <Link to={"/categories/" + category_id + "/recipe/" + id}>
                    <button className="network" id="two">CANCEL</button></Link>

                    </div>

                    <p>A recipe has no soul. You are the cook, give life to the recipe</p> <br />

                </Paper><br />
                    
                </div>
            </div>
            </MuiThemeProvider>
        );
    }}

export default AddRecipe;