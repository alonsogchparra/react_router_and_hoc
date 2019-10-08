import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
  }

  render () {
    const postsList = this.state.posts.length ? (
      this.state.posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title red-text">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="container center">
        <div>Not posts yet.</div>
        <Spinner />
      </div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postsList}
      </div>
    )
  }
}

export default Home