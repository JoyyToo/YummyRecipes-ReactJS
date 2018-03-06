import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardText,} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import {notify} from 'react-notify-toast'
import axiosInstance from '../Constants/Axioscall';

class SingleCategory extends Component {
    // initialize state
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            id: "",
            date_created: '',
            date_modified: '',
            desc: '',
            name: '',

        }
    }

    // handle get category request
    handlecategory = (event) => {
        const id = this.props.match.params['id'];
        const token = window.localStorage.getItem('token');
        if (!token) {
            window.location.replace('/login')
        }

        // send GET request to API
        axiosInstance.get(`category/${id}`)

        .then((response) => {
            let categories = response.data['category'];
            this.setState({
                date_created: categories['date_created'],
                date_modified: categories['date_modified'],
                desc: categories['desc'],
                name: categories['name'],
                id: categories['id'],
            })
        })

        .catch((error) => {
            notify.show(error.response, 'error', 4000);
        });
    };

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

    // mount get category component on page load
    componentDidMount() {
        this.handlecategory();
    }

    // render a single category
    render() {
        let category = this.state;

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
                                    <Card >
                                        <h2 style={{marginLeft: 30, paddingTop: 10}}>{category['name']}</h2>
                                        <p style={{marginLeft: 30, marginBottom: 30}}>{category['desc']}</p>
                                        <CardText>
                                            {
                                                <div>

                                                    <p style={{marginLeft: 15}}><i>Created:</i> {this.state.date_created}</p>
                                                    <p style={{marginLeft: 15}}><i>Modified:</i> {this.state.date_modified}</p>

                                                </div>

                                            }
                                        </CardText>
                                        <Link to={"/updatecategory/" + category['id']}>
                                            <FlatButton label="Edit"
                                                        id={category['id']} desc={category['desc']}
                                                        primary={true}/></Link>
                                        <FlatButton label="Delete" style={{color: 'red'}}
                                                    id={category['id']}
                                                    onClick={this.handleDeletecategory.bind(this)}
                                        />

                                        <Link to={"/categories/" + category['id'] + "/recipes"}><FlatButton
                                                label="View Items"/></Link><br/>
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

export default SingleCategory;

