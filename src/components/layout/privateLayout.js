import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MainLayout } from './mainLayout'

const PrivateLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      rest.logged ? (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
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
  logged: PropTypes.bool,
}

export default PrivateLayout;
