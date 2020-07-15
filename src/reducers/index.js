import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import selectedCardReducer from './selected-card-reducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  selectedCard: selectedCardReducer,
  firestore: firestoreReducer
});

export default rootReducer;



