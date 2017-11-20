import React, { Component } from 'react';
import VehiclesInfo from './VehiclesInfo';

class List extends Component {

  render() {
    const  ships  = this.props.ships;
    return (<div className="">
      {
        ships.map((p) => {
          console.log(p);
          return (
            <div key={p.url}>
              <h4 className='char-name'> {p.name}</h4>
              <VehiclesInfo VehiclesInfo={p} />
            </div>
          );
        })
      }
    </div>);
  }
}

export default List;
