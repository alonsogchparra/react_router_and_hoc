import { DELETE_POST } from './actionTypes';

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
};