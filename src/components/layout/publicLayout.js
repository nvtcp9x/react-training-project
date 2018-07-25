import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header';

export const PublicLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div className="DefaultLayout">
        <Header />
        <hr />
        <Component {...props} />
      </div>
    )}
  />
)

PublicLayout.propTypes = {
  component: PropTypes.func,
}
