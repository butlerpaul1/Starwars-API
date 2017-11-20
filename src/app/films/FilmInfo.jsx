import React, { Component } from 'react';

class FilmInfo extends Component {
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
    const info = this.props.filmInfo;
    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show Info</p>
    }

    return (
      <div>
        <p className="btn btn-info" onClick={this.close}>Hide Info </p>
        <ul>
          <li> <h4> Episode ID:{info.episode_id}</h4> </li>
          <li> <h4> Director: {info.director}</h4></li>
          <li> <h4>  Release Date:{info.release_date}</h4></li>
        </ul>
      </div>
    );
  }
}

export default FilmInfo;
