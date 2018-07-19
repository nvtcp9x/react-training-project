import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fakeAuth } from 'setting/authen';
import Header from '../header';


const PrivateLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      fakeAuth.isAuthenticated ? (
        <React.Fragment>
          <Header />
          <hr />
          <Component {...props} />
        </React.Fragment>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))}
  />
)

PrivateLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  component: PropTypes.func,
}

export default PrivateLayout;
