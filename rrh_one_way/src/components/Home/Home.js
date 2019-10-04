import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <img src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825789urzm0.png" alt="a Pokeball"/>
            <div className="card-content">
              <Link to={{ pathname: `/${post.id}`, search: '', state: { id: post.id, title: post.title, body: post.body } }}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
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