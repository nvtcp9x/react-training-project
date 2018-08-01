import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './home';
import Topics from './topics';
import Flag from './flag';
import Login from './login';
import { PublicLayout } from './layout/publicLayout';
import PrivateLayout from './layout/privateLayout';

const App = (props) => {
  const { logged } = props
  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout exact path="/" component={Home} />
        <PublicLayout path="/login" component={Login} />
        <PublicLayout path="/topics" component={Topics} />
        <PrivateLayout path="/flag" component={Flag} logged={logged} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  logged: PropTypes.bool,
}

const mapStateToProps = state => ({
  logged: state.headerReducer.logged,
})

export default connect(
  mapStateToProps,
)(App)
