import * as c from './../actions/ActionTypes'

export default (state = false, action) => {
  switch (action.type) {
    case c.EDIT_FLASH_CARD:
      return !state;
    default:
      return state;
  }
};