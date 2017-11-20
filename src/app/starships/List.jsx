import React, { Component } from 'react';
import Shipinfo from './Shipinfo';

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
              <Shipinfo Shipinfo={p} />
            </div>
          );
        })
      }
    </div>);
  }
}

export default List;
