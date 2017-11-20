import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
    this.getPeople = this.getPeople.bind(this);
  }

  getPeople () {

    return axios.get('https://swapi.co/api/people/?page=1')
      .then((response) => {
                console.log(response.data.results);
                this.setState({ people: response.data.results });
              });
  }

  componentDidMount() {
    this.getPeople();
  }

  filter(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    let people = this.state.people;

    if (this.state.filter) {
      people = people.filter(people =>
      people.name.toLowerCase()
    .includes(this.state.filter.toLowerCase()));}

    return (<div className="App">
      <h2> Characters</h2>
      <h4>Enter a letter to refine the search</h4>
      <input type='text'
       onChange={this.filter.bind(this)}/>
      { people.map(item =>  <List people={people} />
)}
    </div>);
  }
}

export default App;
