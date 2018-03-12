import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import Pagination from '../Pagination/PaginationApp';
import axiosInstance from '../Constants/AxiosCall';
import '../styles.css';

class Category extends Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = {
      pagination: '',
      categories: [],
      id: '',
      q: '',

    };
  }

  // fetch category data
  componentDidMount() {
    this.handleCategory();
  }

  // handle user input
  handleInputChange = (event) => {
    this.setState({ q: event });
  };

  // handle get category request
  handleCategory = (page = 1) => {
    // send GET request to API
    axiosInstance.get(`category?page=${page}`)

      .then((response) => {
        this.setState({
          categories: response.data[1],
          pagination: response.data[0],
        });
      })
      .catch((error) => {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  };

  // handle delete category request
  handleDeleteCategory = (event) => {
    const id = event.currentTarget.getAttribute('id');

    // send DELETE request to API
    axiosInstance.delete(`category/${id}`)

      .then((response) => {
        this.handleCategory();
        notify.show(response.data.message, 'success', 4000);
        this.setState({
          id: this.state.id,
        });
        this.props
          .history
          .push('/categories');
      })
      .catch((error) => {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  };

  // handle search category request
  handleSearch = () => {
    // send GET request to API
    axiosInstance.get(`category?q=${this.state.q}`)

      .then((response) => {
        const category = response.data['categories'];
        this.setState({
          q: '',
          categories: category,
        });
      })
      .catch((error) => {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  };

  // validate pagination
  button = () => {
    const category = this.state.categories;

    if (category !== '') {
      if (this.state.pagination['current page'] === 1) {
        if (category.length > 5) {
          return (
            <footer>
              <Pagination className="page" changePage={this.handleCategory.bind(this)} paginationObject={this.state.pagination} />
            </footer>
          );
        }
      } else if (this.state.pagination['current page'] !== 1) {
        if (category.length >= 1) {
          return (
            <footer>
              <Pagination className="page" changePage={this.handleCategory.bind(this)} paginationObject={this.state.pagination} />
            </footer>
          );
        }
      }
    }
  }

  // render the categories
  render() {
    const category = this.state.categories;

    const style = {
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
        align: 'left',

      },
    };

    return (
      <div>

        <MuiThemeProvider>
          <div>
            <Link to="/addcategory">
              <FloatingActionButton secondary={true} style={style}>
                <ContentAdd />
              </FloatingActionButton>
            </Link>
            <AutoComplete
              hintText="Search"
              searchText={this.state.q}
              onUpdateInput={this.handleInputChange}
              onNewRequest={this.handleSearch.bind(this)}
              dataSource={this.state.categories}
              filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
              openOnFocus={true}
              style={{
                margin: '0 auto',
                width: 430,
                float: 'right',
                marginRight: 75,
                backgroundColor: 'white',
                paddingLeft: 20,
              }}
            />
          </div>

          <div>
            {

              Object.keys(category).map(key => (
                <div style={styles.card2} key={key}>
                  <MuiThemeProvider is="nospace start">
                    <Card style={{ height: 200 }}>
                      <h2 style={{
                        marginLeft: 30,
                        paddingTop: 10,
                        textDecoration: 'none',
                      }}
                      >
                        {category[key]['name']}
                      </h2>
                      <p style={{ marginLeft: 30, marginBottom: 50 }}>{category[key]['desc'].slice(0, 50)}</p>
                      <CardText>
                        {

                        }
                      </CardText>
                      <Link to={`/categories/${category[key]['id']}`}>
                        <FlatButton
                          label="View"
                        />
                      </Link>
                      <Link to={`/updatecategory/${category[key]['id']}`}>
                        <FlatButton
                          label="Edit"
                          id={category[key]['id']}
                          desc={category[key]['desc']}
                          primary={true}
                        />
                      </Link>
                      <FlatButton
                        label="Delete"
                        style={{ color: 'red' }}
                        id={category[key]['id']}
                        onClick={this.handleDeleteCategory.bind(this)}
                      />

                      <Link to={`/categories/${category[key]['id']}/recipes`}>
                        <FlatButton
                          label="RECIPES"
                        />
                      </Link><br />
                    </Card>

                  </MuiThemeProvider>

                </div>

              ))}
          </div>

        </MuiThemeProvider>
        {this.button()}
      </div>
    );
  }
}


export default Category;
