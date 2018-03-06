import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Notification from 'react-notify-toast'
import './App.css';
import Navbar from './Components/Nav'
import Landing from './Components/Landing'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import ResetPassword from './Components/Auth/ResetPass'
import NewPassword from './Components/Auth/NewPassword'
import AddCategory from './Components/Categories/Addcategory'
import Categories from './Components/Categories/Viewcategories'
import SingleCategory from './Components/Categories/SingleCategory'
import AddRecipe from './Components/Recipes/Addrecipe'
import Recipe from './Components/Recipes/Viewrecipes'
import UpdateCategory from './Components/Categories/Updatecategory'
import UpdateRecipe from './Components/Recipes/Updaterecipe'


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
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/newpassword/:token" component={NewPassword} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:id" component={SingleCategory} />
          <Route exact path="/addcategory" component={AddCategory} />
          <Route exact path="/updatecategory/:id" component={UpdateCategory} />
          <Route exact path="/recipes" component={Recipe} />
          <Route exact path="/addrecipe" component={AddRecipe} />
          <Route exact path="/updaterecipe" component={UpdateRecipe} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
