import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getPosts = () => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        dispatch (loadingPosts(res.data));
      })
  }
}

export const loadingPosts = (posts) => {
  return {
    type: actionTypes.LOADING_POSTS,
    posts
  }
}

export const deletePost = (id) => {
  return {
    type: actionTypes.DELETE_POST,
    id
  }
}