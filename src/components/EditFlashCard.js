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
    props.onEditCard();
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
  onEditCard: PropTypes.func,
  selectedCard: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedCard: state.selectedCard
  }
}; 
  
export default connect(mapStateToProps)(EditFlashCard); 