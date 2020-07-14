import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase'
import ReusableForm from './ReusableForm';

function NewCardForm(props) {
  const firestore = useFirestore();
  function addCardToFirestore(event){
    event.preventDefault();
    props.onNewCardCreation();
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
  onNewCardCreation: PropTypes.func
}

export default NewCardForm;