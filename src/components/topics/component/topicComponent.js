import React from 'react';
import Proptypes from 'prop-types';

const Topic = ({ match }) => (
  <div>
    <h3>
      {match.params.topicId}
    </h3>
  </div>
);

Topic.propTypes = {
  match: Proptypes.shape({}),
}

export default Topic;
