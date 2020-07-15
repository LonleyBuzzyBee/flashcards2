import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenCardClicked(props.id)}>
        <h3>{props.title} - {props.category}</h3>
      </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  content: PropTypes.string,
  whenCardClicked: PropTypes.func

};

export default Card;