import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class Species extends Component {

  constructor(props) {
    super(props);

    this.state = {
      species: [],
    };
    this.getSpecies = this.getSpecies.bind(this);
  }

  getSpecies() {
    return axios.get('https://swapi.co/api/species/')
      .then((response) => {
                console.log(response.data.results);
                this.setState({ species: response.data.results });
              });
  }

  componentDidMount() {
    this.getSpecies();
  }

  filter(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    let species = this.state.species;

    if (this.state.filter) {
      species = species.filter(species =>
      species.name.toLowerCase()
    .includes(this.state.filter.toLowerCase()));}

    return (<div className="App">
      <h2> Species</h2>
      <h4>Enter a letter to refine the search</h4>
      <input type='text'
       onChange={this.filter.bind(this)}/>
      { species.map(item =>  <List species={species} />
)}
    </div>);
  }
}

export default Species;
