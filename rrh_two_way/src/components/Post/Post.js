import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import { connect } from 'react-redux';
import { deletePost } from '../../store/actions';

class Post extends Component {

  deletePostHandler = () => {
    this.props.onDeletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render () {
    console.log(this.props)
    const post = this.props.post ? (
      <div className="center">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button onClick={this.deletePostHandler} className="btn grey">Delete Post</button>
        </div>
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

const mapDispatchToProps = dispatch => {
  return {
    onDeletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);