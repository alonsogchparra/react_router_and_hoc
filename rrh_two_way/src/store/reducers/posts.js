import { DELETE_POST } from '../actions/actionTypes';

const initState = {
  posts: [
    {id: '1', title: 'Squirtle Laid an Egg', body:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quibusdam sed labore, at ullam quos cupiditate illo nemo maxime. Nam.'},
    {id: '2', title: 'Charmander Laid an Egg', body:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quibusdam sed labore, at ullam quos cupiditate illo nemo maxime. Nam.'},
    {id: '3', title: 'a Helix Fossil was Found', body:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quibusdam sed labore, at ullam quos cupiditate illo nemo maxime. Nam.'}
  ]
};

const reducer = (state = initState, action) => {

  switch(action.type) {

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      }

    default:
      return state;
  }

};

export default reducer;