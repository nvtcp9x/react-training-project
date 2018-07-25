import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from 'setting/authen';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false };
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }; // eslint-disable-line
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>
          You must log in to view the page at
          {from.pathname}
        </p>
        <button type="button" onClick={this.login}>
          Log in
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
}

export default Login;
