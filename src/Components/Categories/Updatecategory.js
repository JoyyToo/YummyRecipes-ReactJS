import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';
import '../styles.css'
import Paper from 'material-ui/Paper';
import {notify} from 'react-notify-toast'
import axiosInstance from '../Constants/AxiosCall';


class UpdateCategory extends Component {
    // initialize state
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            desc: '',
            id: '',
        }
    }

    // handle user input
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    };

    // handle get category request
    getCategory() {
        const id = this.props.match.params['id'];
        const token = window.localStorage.getItem('token');
        if (!token) {
            window.location.replace('/login')
        }
        
        // send GET request to API
        axiosInstance.get(`category/${id}`)

            .then((response) => {
                let category = response.data['category'];
                this.setState({
                    id: id,
                    name: category['name'],
                    desc: category['desc']
                })
            })
            .catch((error) => {
                notify.show(error.response.data.message, 'error', 4000);
            });
    }

    // handle edit category requests
    handleEditCategory = () => {
        const payload = new FormData();
        payload.set('name', this.state.name);
        payload.set('desc', this.state.desc);
        
        // send PUT request to API
        axiosInstance.put(`category/${this.state.id}`, payload)
            .then((response) => {
                notify.show(response.data.message, 'success', 4000);
                this.props
                    .history
                    .push('/categories');
            })
            .catch((error) => {
                if (error.response){
                    notify.show(error.response.data.message,'error', 4000);
                }
            });
    };

    // mount category and token when page loads
    componentDidMount() {
        this.getCategory();
    }

    // render update category form
    render() {
        let style = {
            marginLeft: 20,
            width: 340,
        };
        let divstyle = {
            width: 430,
            margin: 'auto',
            textAlign: 'left',
            paddingLeft: 20,
        };



        return (
            <MuiThemeProvider>
                <div className="main">
                    <div className="inputs" style={{paddingTop: '150px'}}>
                        <Paper zDepth={2} style={divstyle}>
                            <p className="heading"><b>UPDATE CATEGORY</b></p>

                            <TextField floatingLabelText="Name" name="name"
                                       value={this.state.name} style={style}
                                       onChange={this.handleInputChange}/><br/><br/>

                            <TextField floatingLabelText="Description" name="desc"
                                       value={this.state.desc} style={style}
                                       onChange={this.handleInputChange}/><br/><br/><br/>

                            <div className="buttons">
                                <button className="network" id="one"
                                        onClick={(event => this.handleEditCategory(event))}>UPDATE
                                </button>
                                <Link to="/categories">
                                    <button className="network" id="two">CANCEL</button>
                                </Link><br/><br/><br/>

                            </div>

                        </Paper><br/>

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default UpdateCategory;