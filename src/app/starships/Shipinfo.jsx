import React, {Component} from 'react';

class Shipinfo extends Component {
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
    const info = this.props.Shipinfo;
    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show Info</p>
    }

    return (
      <div>
        <p className="btn btn-info" onClick={this.close}>Hide Info </p>
        <ul>
          <li> <h4> Ship Class:{info.starship_class}</h4> </li>
          <li> <h4> Model: {info.model}</h4></li>
          <li> <h4> Manufactuer:{info.manufacturer}</h4></li>
        </ul>
      </div>
    );
  }
}

export default Shipinfo;
