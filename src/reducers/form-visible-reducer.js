import * as c from './../actions/ActionTypes';

export default (state = "home-page", action) => {
  switch (action.type) {
    case "FLASH_CARD_LIST":
      state = "flash-card-list"
      return state;
    case "HOME_PAGE":
      state = "home-page"
      return state;
    case c.TOGGLE_FORM:
      state = "see-form"
      return state; 
    case "FLASH_CARD_DETAIL":
      state = "flash-card-detail"
      return state;
    default:
      return state;
  }
};