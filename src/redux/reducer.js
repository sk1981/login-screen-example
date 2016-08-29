import {INITIAL_STATE} from './core.js'
import users from '../data/users'

/**
 *
 * Reduce the object as per action.
 *
 * We are mutating the action here, should be replaced with immutable
 * @param state
 * @param action
 */
export default function reducer(state = INITIAL_STATE, action) {
  let newState;
  switch (action.type) {
    case 'LOGIN':
      newState = {
        loggedInUser : setLoggedInUser(state.loggedInUser, action.username, action.password)
      };
      console.log("new state  is", state);
      return newState;
    case 'LOGOUT':
      newState = {
        loggedInUser : removeLoggedInUser(state)
      };
      return newState;
  }
  return state;
}

/**
 * Sets the logged in user details
 *
 * This ideally be in middleware
 *
 * @param userState
 * @param username
 * @param password
 * @returns {*}
 */
function setLoggedInUser(userState, username, password) {
  let error;
  if(username === undefined || password === undefined) {
    error = "Please enter valid username and password";
  } else if(users[username] === undefined || users[username].password !== password) {
    error = "Username or password not valid";
  }
  // Return state as applicable
  if(error !== undefined) {
    return {
      error: error
    }
  } else {
    return {
      id: username,
      role: users[username].role
    }
  }
}

function removeLoggedInUser(userState) {
  // remove all attributes in case of logged out user
  return {};
}