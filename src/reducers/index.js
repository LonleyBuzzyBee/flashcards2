import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import cardListReducer from './flash-card-list-reducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCardList: cardListReducer,
  firestore: firestoreReducer
});

export default rootReducer;



