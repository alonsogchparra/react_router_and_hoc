import React, { Component } from 'react';

class Post extends Component {
  render () {
    return (
      <div className="container center">
        <h4 className="red-text">{this.props.location.state.title}</h4>
        <p>{this.props.location.state.body}</p>
      </div>
    )
  }
}

export default Post