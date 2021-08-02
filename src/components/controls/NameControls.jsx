import React from 'react';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
const NameControls = ({ greeting, name, onChange }) => (
  <>
    <label htmlFor="greeting"> Greeting </label>
    <input
      id="greeting"
      type="greeting"
      placeholder="Greeting Message"
      name="greeting"
      value={greeting}
      onChange={onChange}
    />
  
    <label htmlFor="name"> Name </label>
    <input
      id="name"
      type="name"
      placeholder="Name"
      name="name"
      value={name}
      onChange={onChange}
    />

  </>
);

NameControls.PropTypes = { 
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NameControls;