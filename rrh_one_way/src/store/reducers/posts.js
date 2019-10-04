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

    default:
      return state;
  }

}

export default reducer;