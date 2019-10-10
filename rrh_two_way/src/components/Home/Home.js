import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Pokeball from '../../pokeball.png'
// import axios from 'axios';

class Home extends Component {

  // state = {
  //   posts: []
  // }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       this.setState({
  //         posts: res.data.slice(0, 10)
  //       })
  //     })
  // }

  render () {
    console.log(this.props);
    const postsList = this.props.posts.length ? (
      this.props.posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <img src={Pokeball} alt="A pokeball"/>
              <Link to={`/${post.id}`}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="container center">
        <Spinner />
        <div>Not posts yet.</div>
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

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(Home);