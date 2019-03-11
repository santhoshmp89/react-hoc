import React, {Component} from 'react';
import CommentBox from '../../components/CommentBox';
import Navigation from '../../components/Navigation';
import CommentLists from '../../components/CommentLists';

import {connect} from 'react-redux';

import {addComment} from '../../actions';
import {bindActionCreators} from 'redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import CommentFullList from '../../components/CommentFullList';

class Homepage extends Component {
  state = {};

  render () {
      return (
          <div className="row">
              <div className="col-sm-12">
                  <Navigation />
                  <br />
                  <br />

                  <Switch>
                      <Route
                          path="/addPost"
                          exact
                          render={props =>
                              !this.props.auth
                                  ? <Redirect to="/" />
                                  : <CommentBox
                                      {...props}
                                      addComment={this.props.addComment}
                                  />}
                      />

                      <Route
                          path="/posts"
                          exact
                          render={props => (
                              <CommentLists
                                  {...props}
                                  commentsLists={this.props.addCommentReducer}
                              />
                          )}
                      />

                      <Route
                          path="/posts/:number"
                          render={props => (
                              <CommentFullList
                                  {...props}
                                  commentsLists={this.props.addCommentReducer}
                              />
                          )}
                      />
                  </Switch>

              </div>
          </div>
      );
  }
}

const mapStateToProps = state => ({
    addCommentReducer: state.addCommentReducer,
    auth: state.signReducer,
});

const mapDispachToProps = dispatch =>
//addComment: value => dispatch (addComment (value)),
    bindActionCreators ({addComment}, dispatch);

export default withRouter (
    connect (mapStateToProps, mapDispachToProps) (Homepage)
);
