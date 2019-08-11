import React, {Component} from 'react';
import CommentBox from '../../components/CommentBox';
import Navigation from '../../components/Navigation';
import CommentLists from '../../components/CommentLists';

import {connect} from 'react-redux';

import {addComment} from '../../actions';
import {bindActionCreators} from 'redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import CommentFullList from '../../components/CommentFullList';
import SlideShow from '../../components/SlideShow/SlideShow';

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

                      <Route
                          path="/slide-show"
                          render={props => (
                              <SlideShow>
                                  <img src="https://www.ilovepets.com/wp-content/uploads/2018/01/persian-cat.jpg" />
                                  <img src="https://parmashelter.org/wp-content/uploads/2013/09/cats.jpg" />
                              </SlideShow>
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
