import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import selectedCardReducer from './selected-card-reducer';
import editReducer from './edit-reducer';
import { firestoreReducer } from 'redux-firestore';
import homePageReducer from './home-page-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  editing: editReducer,
  selectedCard: selectedCardReducer,
  homePageVisible: homePageReducer,
  firestore: firestoreReducer
});

export default rootReducer;



