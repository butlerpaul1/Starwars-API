import React, { Component } from 'react';

class SpeciesInfo extends Component {
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
    const info = this.props.speciesInfo;
    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show Info</p>
    }

    return (
      <div>
        <p className="btn btn-info" onClick={this.close}>Hide Info </p>
        <ul>
          <li> <h4> Classification:{info.classification}</h4> </li>
          <li> <h4> Designation: {info.designation}</h4></li>
          <li> <h4> Lifespan:{info.average_lifespan}</h4></li>
          <li> <h4> Language:{info.language}</h4></li>
        </ul>
      </div>
    );
  }
}

export default SpeciesInfo;
