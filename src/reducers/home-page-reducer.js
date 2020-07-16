import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.TOGGLE_HOME_PAGE:
      return !state;
    default:
      return state;
  }
};