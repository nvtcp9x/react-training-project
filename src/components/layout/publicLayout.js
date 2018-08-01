import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MainLayout } from './mainLayout'

export const PublicLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    )}
  />
)

PublicLayout.propTypes = {
  component: PropTypes.func,
}
