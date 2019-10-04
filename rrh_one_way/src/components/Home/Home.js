import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    console.log('home', this.props);
    return (
      <div>
        {this.props.posts.map(post => <li key={post.id}>{post.title} ID:{post.id}</li>)}
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