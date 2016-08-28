import {INITIAL_STATE} from './core.js'

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      state.loggedInUser = setLoggedInUser(state.loggedInUser, action.userId);
      return state;
    case 'LOGOUT':
      state.loggedInUser = removeLoggedInUser(state);
      return state;
  }
  return state;
}

function setLoggedInUser(userState, userId) {
  userState.id = userId;
  return userState;
}

function removeLoggedInUser(userState) {
  // remove all attributes
  return {};
}