import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore} from 'react-redux-firebase'
import ReusableForm from './ReusableForm';
import * as a from '../actions';
import {connect} from 'react-redux';

function NewCardForm(props) {
  const firestore = useFirestore();
  function addCardToFirestore(event){
    event.preventDefault();
    const { dispatch } = props; 
    dispatch(a.toggleForm());
    return firestore.collection('cards').add(
      {
        title: event.target.title.value,
        category: event.target.category.value,
        content: event.target.content.value
      }
    );
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addCardToFirestore}
      buttonText="Add Flash Card"/>
   </React.Fragment>
  );
}

NewCardForm.propTypes = {
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage : state.formVisibleOnPage
  } 
}

export default connect()(NewCardForm);
