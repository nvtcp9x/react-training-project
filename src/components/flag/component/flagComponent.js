import React from 'react';
import PropTypes from 'prop-types';
import './flag.scss';

const Flag = props => {
  const { counterPlus, counterMinus, flag } = props;
  return (
    <React.Fragment>
      <button type="button" onClick={counterPlus}>
          PLUS
      </button>
      <button type="button" disabled>
        {flag}
      </button>
      <button type="button" onClick={counterMinus}>
          MINUS
      </button>
    </React.Fragment>
  );
}

Flag.propTypes = {
  counterPlus: PropTypes.func,
  counterMinus: PropTypes.func,
  flag: PropTypes.number,
};

export default Flag;
