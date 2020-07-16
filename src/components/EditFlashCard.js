import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import React from 'react';
import * as a from "../actions";
import { connect } from "react-redux";



function EditFlashCard(props){
  const firestore = useFirestore();
  const { dispatch } = props;
  
  function handleEditCardFormSubmission(event) {
    event.preventDefault();
    // props.onEditCard(); replaced with a dispatch that sets editing to false
    dispatch(a.editCard());
    const propertiesToUpdate = {
      title: event.target.title.value,
      category: event.target.category.value,
      content: event.target.content.value
    }
    return firestore.update({collection: 'cards', doc: props.selectedCard }, propertiesToUpdate)
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
  selectedCard: PropTypes.string,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    selectedCard: state.selectedCard,
    editing: state.editing
  }
}; 
  
export default connect(mapStateToProps)(EditFlashCard); 