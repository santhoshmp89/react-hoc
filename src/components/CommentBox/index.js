import React, {Component} from 'react';

export default class CommentBox extends Component {
  state = {
      title: '',
      comment: '',
  };

  handleChange = e => {
      this.setState ({
          [e.target.name]: e.target.value,
      });
  };

  handleSubmit = e => {
      e.preventDefault ();
      this.props.addComment (this.state);
      this.setState ({
          title: '',
          comment: '',
      });
  };

  render () {
      return (
          <form className="col-sm-6" onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      name="title"
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Comments</label>
                  <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="comments"
                      value={this.state.comment}
                      onChange={this.handleChange}
                      name="comment"
                  />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      );
  }
}
