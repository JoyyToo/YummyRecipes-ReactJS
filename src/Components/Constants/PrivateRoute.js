import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// function for private urls which cant be accessed before login
const PrivateRoute = ({ component: Values, Component, ...rest }) => (
    <Route
    {...rest}
    render={props => (
          window.localStorage.getItem('token') ? 
          (<Values {...props} />) :
           (<Redirect to={{ pathname: '/login' }} />
        ))}
  />
);
export default PrivateRoute;