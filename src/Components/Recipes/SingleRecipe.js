import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardText,} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import {notify} from 'react-notify-toast'
import axios from 'axios';
import * as constant from "../constant";

class SingleRecipe extends Component {
    // initialize state
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            id: "",
            date_created: '',
            date_modified: '',
            name: '',
            time: '',
            ingredients: '',
            procedure: '',
            category_id: '',

        }
    }

    // mount token when page loads
    componentDidMount() {
        this.setState({
            token: window.sessionStorage.accessToken,
        });
        this.handlerecipe();
        const token = window.localStorage.getItem('token');
        if (!token) {
            window.location.replace('/login')
        }
    }

    // handle get recipe request
    handlerecipe = (props) => {
        const id = this.props.match.params['id'];
        const category_id = this.props.match.params['category_id'];

        const token = window.localStorage.getItem('token');
        // send GET request to API
        axios({
            url: `${constant.URL}/category/${category_id}/recipes/${id}`,
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }

        })

            .then((response) => {
                let recipe = response.data['recipes'];

                this.setState({
                    date_created: recipe['date_created'],
                    date_modified: recipe['date_modified'],
                    time: recipe['time'],
                    ingredients: recipe['ingredients'],
                    procedure: recipe['procedure'],                                      
                    name: recipe['name'],
                    category_id: recipe['category_id'],
                    id: recipe['id'],
                })
            })

            .catch((error) => {
                notify.show(error.response, 'error', 4000);
            });
    };


    // handle delete recipe request
    handleDeleterecipe = (event) => {
        let id = event.currentTarget.getAttribute('id');
        const category_id = this.props.match.params['category_id'];

        const token = window.localStorage.getItem('token');

        // send DELETE request to API
        axios({
            url: `${constant.URL}/category/${category_id}/recipes/${id}`,
            method: 'delete',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        })

            .then((response) => {

                this.handlerecipe();

                notify.show(response.data.message, 'success', 4000);
                this.setState({
                    id: this.state.id
                });
                this.props
                    .history
                    .push(`/categories/${category_id}/recipes`);
            })

            .catch((error) => {
                notify.show(error.response, 'error', 4000);
            });
    };

    // render a single recipe
    render() {
        let recipe = this.state;

        const styles = {
            card2: {
                position: 'relative',
                padding: 10,
                width: 450,
                float: 'left',
                margin: 5,

            },
            align: {
                align: 'left'

            }
        };
        return (
            <div>
                <MuiThemeProvider>

                    <div>
                        {(
                            <div style={styles.card2}>
                                <MuiThemeProvider is="nospace start">
                                    <Card style={{height: 500}}>
                                        <h2 style={{marginLeft: 30, paddingTop: 10}}>{recipe['name']}</h2>
                                        <p style={{marginLeft: 30, marginBottom: 30}}>Time taken: {recipe['time']}</p>
                                        <p style={{marginLeft: 30, marginBottom: 30}}>Ingridients: {recipe['ingredients']}</p>
                                        <p style={{marginLeft: 30, marginBottom: 30}}>Procedure: {recipe['procedure']}</p>
                                        <CardText>
                                            {
                                                <div>

                                                    <p style={{marginLeft: 15}}><i>Created:</i> {this.state.date_created}</p>
                                                    <p style={{marginLeft: 15, marginBottom: 30}}><i>Modified:</i> {this.state.date_modified}</p>

                                                </div>

                                            }
                                        </CardText>
                                     <Link to={"/categories/" + recipe['category_id'] + "/recipes/" + recipe['id']}>
                                                <FlatButton label="Edit"
                                                            id={recipe['id']} desc={recipe['desc']}
                                                            primary={true}/></Link>
                                            <FlatButton label="Delete" style={{'color': 'red'}}
                                                        category_id={recipe['category_id']}
                                                        id={recipe['id']}
                                                        onClick={(event => this.handleDeleterecipe(event))} />
                                    </Card>

                                </MuiThemeProvider>
                            </div>
                        )}
                    </div>

                </MuiThemeProvider>
            </div>

        )
    }

};

export default SingleRecipe;

