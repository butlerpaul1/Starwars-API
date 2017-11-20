import React, { Component } from 'react';
import SpeciesInfo from './SpeciesInfo';

class List extends Component {

  render() {
    const  species  = this.props.species;
    return (<div className="">
      {
        species.map((p) => {
          console.log(p);
          return (
            <div key={p.url}>
              <h4 className='char-name'> {p.name}</h4>
              <SpeciesInfo speciesInfo={p} />
            </div>
          );
        })
      }
    </div>);
  }
}

export default List;
