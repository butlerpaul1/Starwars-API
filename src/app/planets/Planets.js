import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      planet: [],
    };
    this.getPlanet = this.getPlanet.bind(this);
  }

  getPlanet () {
    return axios.get('https://swapi.co/api/planets/?page=2')
      .then((response) => {
                console.log(response.data.results);
                this.setState({ planet: response.data.results });
              });
  }

  componentDidMount() {
    this.getPlanet();
  }

  filter(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    let planet = this.state.planet;

    if (this.state.filter) {
      planet = planet.filter(planet =>
      planet.name.toLowerCase()
    .includes(this.state.filter.toLowerCase()));}

    return (<div className="App">
      <h2> Planets</h2>
      <h4>Enter a letter to refine the search</h4>
      <input type='text'
       onChange={this.filter.bind(this)}/>
      { planet.map(item =>  <List key={planet.name} planet={planet} />
)}
    </div>);
  }
}

export default App;
