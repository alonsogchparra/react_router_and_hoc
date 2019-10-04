import * as actionTypes from '../actions/actionTypes';

const initState = {
  posts: []
}

const reducer = (state = initState, action) => {

  switch(action.type) {

    case actionTypes.LOADING_POSTS:
      return {
        ...state,
        posts: state.posts.concat(action.posts).slice(0, 10)
      }

    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      }

    default:
      return state;
  }

}

export default reducer;