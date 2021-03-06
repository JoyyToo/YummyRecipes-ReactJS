import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import axiosInstance from '../Constants/AxiosCall';
import '../styles.css';


class AddRecipe extends Component {
  // initialize state
  state = {
    name: '',
    time: '',
    ingredients: '',
    procedure: '',
    id: '',
  }

  // handle user input
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  // handle add recipe request
  handleAddRecipe = () => {
    const categoryid = this.props.match.params['category_id'];
    const payload = new FormData();
    payload.set('name', this.state.name);
    payload.set('time', this.state.time);
    payload.set('ingredients', this.state.ingredients);
    payload.set('procedure', this.state.procedure);

    // send POST request to API
    axiosInstance.post(`category/${categoryid}/recipes`, payload)
      .then((response) => {
        notify.show(response.data.message, 'success', 4000);
        this.props
          .history
          .push(`/categories/${categoryid}/recipes`);
      })
      .catch((error) => {
        notify.show(error.response.data.message, 'error', 4000);
      });
  }

  // render add recipe form
  render() {
    const id = this.state.id;
    const categoryid = this.props.match.params['category_id'];

    const style = {
      marginLeft: 20,
      width: 440,
    };
    const divstyle = {
      width: 500,
      margin: 'auto',
      textAlign: 'left',
      paddingLeft: 20,
    };
    return (
      <MuiThemeProvider>
        <div className="main">
          <div className="inputs" style={{ paddingTop: '60px' }}>
            <Paper zDepth={2} style={divstyle}>
              <p className="heading"><b>ADD RECIPE</b></p>

              <TextField
                floatingLabelText="Name"
                name="name"
                value={this.state.name}
                style={style}
                onChange={this.handleInputChange}
              /><br /><br />

              <TextField
                floatingLabelText="Time taken"
                name="time"
                value={this.state.time}
                style={style}
                onChange={this.handleInputChange}
              /><br /><br />

              <TextField
                floatingLabelText="Ingredients"
                name="ingredients"
                value={this.state.ingredients}
                style={style}
                multiLine={true}
                rows={3}
                onChange={this.handleInputChange}
              /><br />

              <TextField
                floatingLabelText="Procedure"
                name="procedure"
                value={this.state.procedure}
                style={style}
                multiLine={true}
                rows={3}
                onChange={this.handleInputChange}
              /><br />

              <div className="buttons" id="btnstyle">
                <button className="network" id="one" onClick={(event => this.handleAddRecipe(event))}>ADD</button>
                <Link to={`/categories/${categoryid}/recipe/${id}`}>
                  <button className="network" id="two">CANCEL</button>
                </Link>

              </div>

              <p>A recipe has no soul. You are the cook, give life to the recipe</p> <br />

            </Paper><br />

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AddRecipe;
