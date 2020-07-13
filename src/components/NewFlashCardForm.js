import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewCardForm(props){
  function handleNewCardFormSubmission(event){
    event.preventDefault();
    props.onNewCardCreation({
      title: event.target.title.value,
      category: event.target.category.value,
      content: event.target.content.value,
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <form onSubmit = {handleNewCardFormSubmission}>
        <input
          type = 'text'
          name = 'title'
          placeholder = 'card Title'
        />
        <input
          type = 'text'
          name = 'category'
          placeholder = 'Category'
        />
        <textarea
          type = 'text'
          name = 'content'
          placeholder = 'Enter info here'
        />
        <button type='submit'>Create card!</button>
      </form>
    </React.Fragment>
  );
}

NewCardForm.propTypes = {
  onNewCardCreation: PropTypes.func
}

export default NewCardForm;