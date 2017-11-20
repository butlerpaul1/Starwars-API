import React, { Component } from 'react';

class CharInfo extends Component {
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
    const info = this.props.charInfo;
    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show Info</p>
    }

    return (
      <div>
        <p className="btn btn-info" onClick={this.close}>Hide Info </p>
        <ul>
          <li> <h4>Gender:{info.gender}</h4> </li>
          <li> <h4> Birthday: {info.birth_year}</h4></li>
          <li> <h4> Hair Color:{info.hair_color}</h4></li>
        </ul>
      </div>
    );
  }
}

export default CharInfo;
