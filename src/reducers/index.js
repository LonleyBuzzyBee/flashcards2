import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import cardListReducer from './flash-card-list-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCardList: cardListReducer
});

export default rootReducer;