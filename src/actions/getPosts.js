import { API } from 'aws-amplify';
import * as type from '../actions/actionTypes';
// Action Creators
const getPostsSuccess = posts => ({
  type: type.GET_POSTS_SUCCESS,
  payload: posts
});
const getPostsError = error => ({
  type: type.GET_POSTS_FAILURE,
  payload: error
});

// Async Action Creator
export function getPosts() {
  return function action(dispatch) {
    dispatch({ type: type.GET_POSTS_SUCCESS });
    const request = API.get('HitchedagramAPI', '/posts');
    // console.log('getPosts in actions/getPosts.js', request);
    return request.then(
      response => dispatch(getPostsSuccess(response)),
      err => dispatch(getPostsError(err))
    );
  };
}

//Reducer

export default (
  state = {
    posts: []
  },
  action
) => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS': {
      return { ...state, posts: action.payload };
    }
    case 'GET_POSTS_FAILURE': {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};