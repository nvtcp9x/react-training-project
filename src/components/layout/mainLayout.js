import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';

export const MainLayout = ({ children }) => (
  <div className="DefaultLayout">
    <Header />
    <hr />
    <div>
      { children }
    </div>
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.node,
}
