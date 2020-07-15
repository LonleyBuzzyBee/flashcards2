import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { type, id } = action; 
  switch (action.type) {
    case c.SELECTED_CARD:    
      return state = action.id;
    default :
      return state; 
  }
};


