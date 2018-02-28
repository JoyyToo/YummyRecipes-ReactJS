import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
<<<<<<< HEAD
import {Card, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import {notify} from 'react-notify-toast'
import axiosInstance from '../Constants/Axioscall';
import SearchBar from 'material-ui-search-bar'
import Pagination from '../Pagination/Pagination'

class Recipe extends Component {
    // initialize state
    constructor(props) {
        super(props);
        this.state = {
            pagination: "",
=======
import {Card, CardText,} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import {notify} from 'react-notify-toast'
import axios from 'axios';
import * as constant from "../constant";
import SearchBar from 'material-ui-search-bar'
import Pagination from 'material-ui-pagination';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
>>>>>>> [feature] Add recipe components
            recipes: [],
            data: "",
            category_id: "",
            id: "",
<<<<<<< HEAD
            q: "",
=======
>>>>>>> [feature] Add recipe components

        }
    }

<<<<<<< HEAD
    // handle user input
    handleInputChange = (event) => {
        this.setState({q: event});    

    };

    // handle get recipe request
    handlerecipe = (page=1) => {
        const category_id = this.props.match.params['category_id'];
=======

    componentDidMount() {
        this.setState({
            token: window.sessionStorage.accessToken,
        });
>>>>>>> [feature] Add recipe components
        const token = window.localStorage.getItem('token');
        if (!token) {
            window.location.replace('/login')
        }
<<<<<<< HEAD

        // send GET request to API
        axiosInstance.get(`category/${category_id}/recipes?page=${page}`)
            .then((response) => {
                let recipe = response.data[1];
                let paginationObject = response.data[0];
=======
    }

    handlerecipe = (props) => {
        const category_id = this.props.match.params['category_id'];
        const token = window.localStorage.getItem('token');
        axios({
            url: `${constant.URL}/category/${category_id}/recipes`,
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }

        })

            .then((response) => {
                let recipe = response.data[1];
>>>>>>> [feature] Add recipe components

                this.setState({
                    data: response.data,
                    recipes: recipe,
                    id: this.state.id,
                    category_id: this.state.category_id,
<<<<<<< HEAD
                    pagination: paginationObject
=======
>>>>>>> [feature] Add recipe components
                })
            })

            .catch((error) => {
                notify.show(error.response.data.message, 'error', 4000);
            });
    };

<<<<<<< HEAD
    // call handle recipe before mounting
=======
>>>>>>> [feature] Add recipe components
    componentWillMount() {
        this.handlerecipe();
    }

<<<<<<< HEAD
    // handle delete recipe request
=======
>>>>>>> [feature] Add recipe components
    handleDeleterecipe = (event) => {
        let id = event.currentTarget.getAttribute('id');
        const category_id = this.props.match.params['category_id'];

<<<<<<< HEAD
        // send DELETE request to API
        axiosInstance.delete(`category/${category_id}/recipes/${id}`)
            .then((response) => {
                this.handlerecipe();
=======
        let th = this;

        const token = window.localStorage.getItem('token');

        axios({
            url: `${constant.URL}/category/${category_id}/recipes/${id}`,
            method: 'delete',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        })

            .then((response) => {

                th.handlerecipe();

>>>>>>> [feature] Add recipe components
                notify.show(response.data.message, 'success', 4000);
                this.setState({
                    id: this.state.id
                });
                this.props
                    .history
                    .push(`/categories/${category_id}/recipes`);
            })
<<<<<<< HEAD
=======

>>>>>>> [feature] Add recipe components
            .catch((error) => {
                notify.show(error.response, 'error', 4000);
            });
    };

<<<<<<< HEAD
    // handle search recipe request
    handleSearch= (event) => {
        const category_id = this.props.match.params['category_id'];

        // send GET request to API
        axiosInstance.get(`category/${category_id}/recipes?q=${this.state.q}`)
            .then((response) => {
                let recipe = response.data['recipes'];
                this.setState({
                        q: "",
                        recipes: recipe,
                });   
            })
            .catch((error) => {
                notify.show(error.response.data.message, 'error', 4000);
            });
    };

    // render recipes
=======

>>>>>>> [feature] Add recipe components
    render() {
        let recipe = this.state.recipes;

        let style = {
            marginLeft: 20,
        };

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

        const category_id = this.props.match.params['category_id'];
<<<<<<< HEAD
=======

>>>>>>> [feature] Add recipe components
        return (
            <div>
                
                <MuiThemeProvider>
                    <div>
                        <Link to={"/categories/"+ category_id +"/addrecipe"}>
                            <FloatingActionButton secondary={true} style={style}>
                                <ContentAdd/>
                            </FloatingActionButton>
                        </Link>
<<<<<<< HEAD
                        <SearchBar name="q" value={this.state.q}
                            onChange={this.handleInputChange}
                            onRequestSearch={this.handleSearch.bind(this)}

                            style={{
                                margin: '0 auto',
                                width: 430,
                                float: 'right',
                                marginRight: 75,
                            }}
=======
                        <SearchBar
                          onChange={() => console.log('onChange')}
                          onRequestSearch={() => console.log('onRequestSearch')}
                          style={{
                            margin: '0 auto',
                            width: 430,
                              float: 'right',
                              marginRight: 75,
                          }}
>>>>>>> [feature] Add recipe components
                        />
                    </div>

                    <div>
                        
                        {

                            Object.keys(recipe).map((key) => (
                                <div style={styles.card2} key={key}>
                                    <MuiThemeProvider is="nospace start">
                                        <Card style={{height: 250}}>
                                            <h2 style={{marginLeft: 30, 
                                                paddingTop: 10}} >
                                                {recipe[key]['name']}</h2>
                                            <p style={{marginLeft: 30}}>Time: {recipe[key]['time']}</p>
                                            <CardText>
                                                {

                                                }
                                            </CardText>
<<<<<<< HEAD

                                            <Link to={"/categories/" + recipe[key]['category_id'] + "/recipe/" + recipe[key]['id']}>
                                            <FlatButton label="View"
                                                        category_id={recipe[key]['category_id']}
                                                        id={recipe[key]['id']}
                                            /></Link>               
=======
                            
>>>>>>> [feature] Add recipe components
                                            <Link to={"/categories/" + recipe[key]['category_id'] + "/recipes/" + recipe[key]['id']}>
                                                <FlatButton label="Edit"
                                                            id={recipe[key]['id']} desc={recipe[key]['desc']}
                                                            primary={true}/></Link>
                                            <FlatButton label="Delete" style={{'color': 'red'}}
                                                        category_id={recipe[key]['category_id']}
                                                        id={recipe[key]['id']}
                                                        onClick={(event => this.handleDeleterecipe(event))}
                                            />
<<<<<<< HEAD
=======
                                            <Link to={"/categories/" + recipe[key]['category_id'] + "/recipe/" + recipe[key]['id']}>
                                            <FlatButton label="View" primary={true}
                                                        category_id={recipe[key]['category_id']}
                                                        id={recipe[key]['id']}
                                            /></Link>
>>>>>>> [feature] Add recipe components
                                        </Card>

                                    </MuiThemeProvider>

                                </div>
                                            
                            ))}
<<<<<<< HEAD
                            <Pagination changePage={this.handlerecipe.bind(this)} paginationObject={this.state.pagination}/>
=======
>>>>>>> [feature] Add recipe components
                          
                    </div>

                </MuiThemeProvider>

            </div>

        )
    }

};

export default Recipe;

