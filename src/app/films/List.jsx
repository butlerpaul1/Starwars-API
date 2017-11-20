import React, { Component } from 'react';
import FilmInfo from './FilmInfo';

class List extends Component {

  render() {
    const  film  = this.props.film;
    return (<div className="">
      {
        film.map((p) => {
          console.log(p);
          return (
            <div key={p.url}>
              <h4 className='char-title'> {p.title}</h4>
              <FilmInfo filmInfo={p} />
            </div>
          );
        })
      }
    </div>);
  }
}

export default List;
