import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { type, id } = action; 
  switch (action.type) {
    case c.SELECTED_CARD:    
      return state = action.id; // dispatch(a.setSelectedCard("MYCARD")) || dispatch(a.setSelectedCard(null)) || dispatch(a.setSelectedCard(42))
    default :
      return state; 
  }
};


