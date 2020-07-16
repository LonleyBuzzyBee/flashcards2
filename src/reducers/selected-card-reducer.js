import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { type, id } = action; 
  switch (action.type) {
    case c.SELECTED_CARD:    
      return state = action.id; // state= { id: "SOMELONGSTRING"} // state: = {id: null} dispatch(a.setSelectedCard(null))
    default :
      return state; 
  }
};


