import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import axiosInstance from '../Constants/AxiosCall';
import Pagination from '../Pagination/PaginationApp';

class Recipe extends Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = {
      pagination: '',
      recipes: [],
      category_id: '',
      id: '',
      q: '',

    };
  }

  // call handle recipe before mounting
  componentDidMount() {
    this.handleRecipe();
  }

  // handle user input
  handleInputChange = (event) => {
    this.setState({ q: event });
  };

  // handle get recipe request
  handleRecipe = (page = 1) => {
    const categoryid = this.props.match.params['category_id'];

    // send GET request to API
    axiosInstance.get(`category/${categoryid}/recipes?page=${page}`)
      .then((response) => {
        this.setState({
          recipes: response.data[1],
          id: this.state.id,
          category_id: this.state.category_id,
          pagination: response.data[0],
        });
      })

      .catch((error) => {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  };

  // handle delete recipe request
  handleDeleteRecipe = (event) => {
    const id = event.currentTarget.getAttribute('id');
    const categoryid = this.props.match.params['category_id'];

    // send DELETE request to API
    axiosInstance.delete(`category/${categoryid}/recipes/${id}`)
      .then((response) => {
        this.handleRecipe();
        notify.show(response.data.message, 'success', 4000);
        this.setState({
          id: this.state.id,
        });
        this.props
          .history
          .push(`/categories/${categoryid}/recipes`);
      })
      .catch((error) => {
        notify.show(error.response, 'error', 4000);
      });
  };

  // handle search recipe request
  handleSearch = () => {
    const categoryid = this.props.match.params['category_id'];

    // send GET request to API
    axiosInstance.get(`category/${categoryid}/recipes?q=${this.state.q}`)
      .then((response) => {
        const recipe = response.data['recipes'];
        this.setState({
          q: '',
          recipes: recipe,
        });
      })
      .catch((error) => {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  };

  // validate pagination
  button() {
    const recipe = this.state.recipes;

    if (recipe !== '') {
      if (this.state.pagination['current page'] === 1) {
        if (recipe.length > 5) {
          return (
            <footer>
              <Pagination className="page" changePage={this.handleRecipe.bind(this)} paginationObject={this.state.pagination} />
            </footer>
          );
        }
      } else if (this.state.pagination['current page'] !== 1) {
        if (recipe.length >= 1) {
          return (
            <footer>
              <Pagination className="page" changePage={this.handleRecipe.bind(this)} paginationObject={this.state.pagination} />
            </footer>
          );
        }
      }
    }
  }

  // render recipes
  render() {
    const recipe = this.state.recipes;

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

    const categoryid = this.props.match.params['category_id'];
    return (
      <div>

        <MuiThemeProvider>
          <div>
            <Link to={`/categories/${categoryid}/addrecipe`}>
              <FloatingActionButton secondary={true} style={style}>
                <ContentAdd />
              </FloatingActionButton>
            </Link>
            <AutoComplete
              hintText="Search"
              searchText={this.state.q}
              onUpdateInput={this.handleInputChange}
              onNewRequest={this.handleSearch.bind(this)}
              dataSource={this.state.recipes}
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

              Object.keys(recipe).map(key => (
                <div style={styles.card2} key={key}>
                  <MuiThemeProvider is="nospace start">
                    <Card style={{ height: 200 }}>
                      <h2 style={{
                        marginLeft: 30,
                        paddingTop: 10,
                      }}
                      >
                        {recipe[key]['name']}
                      </h2>
                      <p style={{ marginLeft: 30 }}>Time: {recipe[key]['time']}</p>
                      <CardText>
                        {

                        }
                      </CardText>

                      <Link to={`/categories/${recipe[key]['category_id']}/recipe/${recipe[key]['id']}`}>
                        <FlatButton
                          label="View"
                          category_id={recipe[key]['category_id']}
                          id={recipe[key]['id']}
                        />
                      </Link>
                      <Link to={`/categories/${recipe[key]['category_id']}/recipes/${recipe[key]['id']}`}>
                        <FlatButton
                          label="Edit"
                          id={recipe[key]['id']}
                          desc={recipe[key]['desc']}
                          primary={true}
                        />
                      </Link>
                      <FlatButton
                        label="Delete"
                        style={{ color: 'red' }}
                        category_id={recipe[key]['category_id']}
                        id={recipe[key]['id']}
                        onClick={(event => this.handleDeleteRecipe(event))}
                      />
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

export default Recipe;
