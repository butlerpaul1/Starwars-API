import React, { Component } from 'react';

class PlanetsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.open =  this.open.bind(this);
    this.close = this.close.bind(this);
  }
open(){
  this.setState({ expanded: !this.state.expanded})
}
close(){
  this.setState({ expanded: !this.state.expanded})
}
  render() {
    const info = this.props.planetInfo;
    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show Info</p>
    }

    return (
      <div>
        <p className="btn btn-info" onClick={this.close}>Hide Info </p>
        <ul>
          <li> <h4> Orbital Period:{info.orbital_period}</h4> </li>
          <li> <h4> Climate:{info.climate}</h4> </li>
          <li> <h4> Terrain: {info.terrain}</h4></li>
          <li> <h4>  Population:{info.population}</h4></li>
        </ul>
      </div>
    );
  }
}

export default PlanetsInfo;
