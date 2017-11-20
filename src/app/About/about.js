// src/components/About/index.js
import React, { PropTypes, Component } from 'react';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <h1>
          About
        </h1>
        <p>This application uses the SWAPI and populates arrays with the results.</p>
        <p>Use the search bar to refine your search.</p>
      </div>
    );
  }
}
