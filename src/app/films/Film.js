import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class Film extends Component {

  constructor(props) {
    super(props);

    this.state = {
      film: [],
    };
    this.getFilm = this.getFilm.bind(this);
  }

  getFilm () {
    return axios.get('https://swapi.co/api/films')
      .then((response) => {
                console.log(response.data.results);
                this.setState({ film: response.data.results });
              });
  }

  componentDidMount() {
    this.getFilm();
  }

  filter(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    let film = this.state.film;

    if (this.state.filter) {
      film = film.filter(film =>
      film.title.toLowerCase()
    .includes(this.state.filter.toLowerCase()));}

    return (<div className="Film">
      <h2> Films</h2>
      <h4>Enter a letter to refine the search</h4>
      <input type='text'
       onChange={this.filter.bind(this)}/>
      { film.map(item =>  <List film={film} />
)}
    </div>);
  }
}

export default Film;
