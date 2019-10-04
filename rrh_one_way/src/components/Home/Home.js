import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import * as actions from '../../store/actions';

class Home extends Component {

  componentDidMount() {
    if (this.props.posts.length) {
      return;
    } else {
      this.props.ongetPosts();
    }
  }

  render () {

    const postsList = this.props.posts.length ? (
      this.props.posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title red-text">{post.title}</span>
              <p>{post.body}</p>
              <div className="right">ID: {post.id}</div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">
        <Spinner />
        <div>Not Posts Yet.</div>
      </div>
    )

    return (
      <div className="container home">
      <h4 className="center">Home</h4>
        {postsList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    ongetPosts: () => dispatch(actions.getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)