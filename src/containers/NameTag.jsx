import React, { Component } from 'react';
import NameControls from '../components/controls/NameControls';
import NameDisplay from '../components/display/NameDisplay';

export default class NameTag extends Component {
    state = {
      greeting: '',
      name: '',
    };

    handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
    }
    
    handleChange = async ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      const { greeting, name } = this.state;

      return (
        <>
          <NameControls
            greeting={greeting}
            name={name}
            onChange={this.handleChange}
          />
          <NameDisplay
            greeting={greeting}
            name={name}
          />
        </>
      );
    }
}
