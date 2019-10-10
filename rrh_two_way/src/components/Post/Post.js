import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import { connect } from 'react-redux';

class Post extends Component {
  render () {
    console.log(this.props)
    const post = this.props.post ? (
      <div className="center">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">
        <Spinner />
        <h4>Loading Post...</h4>
      </div>
    );
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(Post);