import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import {notify} from 'react-notify-toast'
import SearchBar from 'material-ui-search-bar'
import Pagination from '../Pagination/Pagination'
import axiosInstance from '../Constants/Axioscall';

class Category extends Component {
    // initialize state
    constructor(props) {
        super(props);
        this.state = {
            pagination: "",
            categories: [],
            data: "",
            id: "",
            q: "",

        }
    }

    // handle user input
    handleInputChange = (event) => {
        this.setState({q: event});       
    };

    // handle get category request
    handlecategory = (page=1) => {
        const token = window.localStorage.getItem('token');
        if (!token) {
            window.location.replace('/login')
        }
        // send GET request to API
        axiosInstance.get(`category?page=${page}`)

            .then((response) => {
                let category = response.data[1];
                let paginationObject = response.data[0];

                this.setState({
                    data: response.data,
                    categories: category, 
                    pagination: paginationObject         
                })
            })
            .catch((error) => {
                notify.show(error.response.data.message, 'error', 4000);
            });
    };

    // components mounted when page is loaded
    componentWillMount() {
        this.handlecategory()
    }

    // handle delete category request
    handleDeletecategory = (event) => {
        let id = event.currentTarget.getAttribute('id');

        // send DELETE request to API
        axiosInstance.delete(`category/${id}`)

            .then((response) => {
                this.handlecategory();
                notify.show(response.data.message, 'success', 4000);
                this.setState({
                    id: this.state.id
                });
                this.props
                    .history
                    .push('/categories');
            })
            .catch((error) => {
                notify.show(error.response.data.message, 'error', 4000);
            });
    };

    // handle search category request
    handleSearch= (event) => {
        // send GET request to API
        axiosInstance.get(`category?q=${this.state.q}`)

            .then((response) => {
                let category = response.data['categories'];
                this.setState({
                        q: "",
                        categories: category,
                });
            })
            .catch((error) => {
                notify.show(error.response.data.message, 'error', 4000);
            });
    };

    // render the categories
    render() {
        let category = this.state.categories;

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
        
        return (
            <div>

                <MuiThemeProvider>
                    <div>
                        <Link to="/addcategory">
                            <FloatingActionButton secondary={true} style={style}>
                                <ContentAdd/>
                            </FloatingActionButton>
                        </Link>          
                        <SearchBar name="q" value={this.state.q}
                          onChange={this.handleInputChange}
                          onRequestSearch={this.handleSearch.bind(this)}
                          style={{
                            margin: '0 auto',
                            width: 430,
                            float: 'right',
                            marginRight: 75,
                          }} />
                    </div>

                    <div>
                        {

                            Object.keys(category).map((key) => (
                                <div style={styles.card2} key={key}>
                                    <MuiThemeProvider is="nospace start">
                                        <Card style={{height: 250}}>
                                            <h2 style={{marginLeft: 30, 
                                                paddingTop: 10,  textDecoration: 'none' }} >
                                                {category[key]['name']}</h2>
                                            <p style={{marginLeft: 30, marginBottom: 90}}>{category[key]['desc'].slice(0,50)}</p>
                                            <CardText>
                                                {

                                                }
                                            </CardText>
                                            <Link to={"/categories/" + category[key]['id'] }><FlatButton
                                                label="View"/></Link>
                                            <Link to={"/updatecategory/" + category[key]['id']}>
                                                <FlatButton label="Edit"
                                                            id={category[key]['id']} desc={category[key]['desc']}
                                                            primary={true}/></Link>
                                            <FlatButton label="Delete" style={{'color': 'red'}}
                                                        id={category[key]['id']}
                                                        onClick={this.handleDeletecategory.bind(this)}
                                            />

                                            <Link to={"/categories/" + category[key]['id'] + "/recipes"}><FlatButton
                                                label="View Items"/></Link><br/>
                                        </Card>

                                    </MuiThemeProvider>

                                </div>
                                                                                        
                            ))}
                            <Pagination changePage={this.handlecategory.bind(this)} paginationObject={this.state.pagination}/>
                          
                    </div>

                </MuiThemeProvider>

            </div>
            

        )        
    }
    
};

export default Category;

