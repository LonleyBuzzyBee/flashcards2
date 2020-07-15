import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import React from 'react';



function EditFlashCard(props){
  const firestore = useFirestore();
  
  
  function handleEditCardFormSubmission(event) {
    event.preventDefault();
    props.onEditCard();
    const propertiesToUpdate = {
      names: event.target.title.value,
      location: event.target.category.value,
      issue: event.target.content.value
    }
    return firestore.update({collection: 'cards', doc: props.card.id }, propertiesToUpdate)
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCardFormSubmission}
        buttonText="flash card list"/>
    </React.Fragment>
  )

}

  EditFlashCard.propTypes = {
   onEditCard: PropTypes.func
 } 
  
export default EditFlashCard; 