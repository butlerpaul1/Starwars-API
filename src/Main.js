import React, { Component } from "react";
import './index.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import App from "./app/App";
import planets from "./app/planets/Planets";
import starships from "./app/starships/starships";
import species from "./app/species/Species";
import film from "./app/films/Film";
import vehicles from "./app/vehicles/Vehicles";
import about from "./app/About/about"



class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <h1>StarWars API</h1>

            <li><NavLink to="/">Characters</NavLink></li>
            <li><NavLink to="/planets">Planets</NavLink></li>
            <li><NavLink to="/starships">Starships</NavLink></li>
            <li><NavLink to="/species">Species</NavLink></li>
            <li><NavLink to="/film">Films</NavLink></li>
            <li><NavLink to="/vehicles">Vehicles</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>



          </ul>
          <div className="content">
            <Route exact path="/" component={App}/>
            <Route path="/planets" component={planets}/>
            <Route path="/starships" component={starships}/>
            <Route path="/species" component={species}/>
            <Route path="/film" component={film}/>
            <Route path="/vehicles" component={vehicles}/>
            <Route path="/about" component={about}/>



          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
