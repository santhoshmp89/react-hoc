import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
  state = {};

  render () {
      return (
          <nav className="nav">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/posts">Posts</NavLink>
              <NavLink className="nav-link" to="/signin">SignIn</NavLink>
          </nav>
      );
  }
}
