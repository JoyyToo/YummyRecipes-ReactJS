import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Notification from 'react-notify-toast'
import './App.css';
import Navbar from './Components/Nav'
import NotFound from './Components/Constants/NotFound'
import Landing from './Components/Landing'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import NewPassword from './Components/Auth/NewPassword'
import AddCategory from './Components/Categories/AddCategory'
import Categories from './Components/Categories/Category'
import SingleCategory from './Components/Categories/SingleCategory'
import SingleRecipe from './Components/Recipes/SingleRecipe'
import AddRecipe from './Components/Recipes/AddRecipe'
import Recipe from './Components/Recipes/Recipe'
import UpdateCategory from './Components/Categories/UpdateCategory'
import UpdateRecipe from './Components/Recipes/UpdateRecipe'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Notification />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/newpassword/:token" component={NewPassword} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:id" component={SingleCategory} />
          <Route exact path="/addcategory" component={AddCategory} />
          <Route exact path="/updatecategory/:id" component={UpdateCategory} />
          <Route exact path="/categories/:category_id/recipes" component={Recipe} />
          <Route exact path="/categories/:category_id/addrecipe" component={AddRecipe} />
          <Route exact path="/categories/:category_id/recipes/:id" component={UpdateRecipe} />
          <Route exact path="/categories/:category_id/recipe/:id" component={SingleRecipe} />
          <Route component={NotFound} />
          
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
