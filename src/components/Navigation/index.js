import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../../actions';

class Navigation extends Component {
  handleClick = e => {
      e.preventDefault ();
      this.props.signIn (this.props.auth);
  };

  render () {
      return (
          <nav className="nav">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/posts">Posts</NavLink>
              <NavLink className="nav-link" to="/addPost">Add</NavLink>

              <button onClick={this.handleClick}>
                  {this.props.auth ? 'SignOut' : 'SignIn'}
              </button>
          </nav>
      );
  }
}

const mapStateToProps = state => ({
    auth: state.signReducer,
});

const mapStateToDispatch = dispatch => ({
    signIn: value => dispatch (signIn (value)),
});

export default connect (mapStateToProps, mapStateToDispatch) (Navigation);
