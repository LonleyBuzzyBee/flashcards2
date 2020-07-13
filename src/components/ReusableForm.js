import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='card Title'
        />
        <input
          type='text'
          name='category'
          placeholder='Category'
        />
        <textarea
          type='text'
          name='content'
          placeholder='Enter info here'
        />
        <button type='submit'>Create card!</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.PropTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;