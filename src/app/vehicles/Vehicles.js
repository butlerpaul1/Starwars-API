import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class starships extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ships: [],
    };
    this.getShips = this.getShips.bind(this);
  }

  getShips () {
    let apiString = 'https://swapi.co/api/vehicles/';
    return axios.get(apiString)
      .then((response) => {
                console.log(response.data.results.name);
                this.setState({ ships: response.data.results });
              });
  }

  componentDidMount() {
    this.getShips();
  }

  filter(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    let ships = this.state.ships;

    if (this.state.filter) {
      ships = ships.filter(ships =>
      ships.name.toLowerCase()
    .includes(this.state.filter.toLowerCase()));}

    return (<div className="App">
      <h2> Vehicles</h2>
      <h4>Enter a letter to refine the search</h4>
      <input type='text'
       onChange={this.filter.bind(this)}/>
      { ships.map(item =>  <List ships={ships} />
)}
    </div>);
  }
}

export default starships;
