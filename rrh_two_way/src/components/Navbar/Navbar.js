import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const navbar = (props) => (
  <div>

    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke's Time</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="id-mobile" className="right hide-on-med-and-down">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>

  </div>
);

export default withRouter(navbar);