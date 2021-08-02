import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const NameDisplay = ({ greeting, name }) =>
  <div>
    <p>{greeting}</p>
    <p>{name}</p>
  </div>;


NameDisplay.PropTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NameDisplay;
