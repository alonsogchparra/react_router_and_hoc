import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Post extends Component {

  deletePostHandler = () => {
    this.props.onDeletePost(this.props.location.state.id);
    this.props.history.push('/');
  }

  render () {
    return (
      <div className="container center">
        <h4 className="red-text">{this.props.location.state.title}</h4>
        <p>{this.props.location.state.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.deletePostHandler }>DELETE POST</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeletePost: (id) => dispatch(actions.deletePost(id))
  }
}

export default connect(null, mapDispatchToProps)(Post)