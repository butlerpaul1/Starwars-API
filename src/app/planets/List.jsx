import React, { Component } from 'react';
import PlanetsInfo from './PlanetsInfo';

class List extends Component {

  render() {
    const  planet  = this.props.planet;
    return (<div className="">
      {
        planet.map((p) => {
          return (
            <div key={p.url}>
              <h4 className='char-name' key={p.name}> {p.name}</h4>
              <PlanetsInfo  planetInfo={p} />
            </div>
          );
        })
      }
    </div>);
  }
}

export default List;
