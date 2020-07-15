import React from "react";
import PropTypes from "prop-types";

function CardDetail(props){
  const { card, onEditClick } = props;


  return (
    <React.Fragment>
       <h3>{card.title} - {card.category}</h3>
        <p> {card.content} </p>
      <button onClick={onEditClick}>edit this thing</button>
    </React.Fragment>
  );
}

CardDetail.propTypes = {
  card: PropTypes.object,
  onEditClick: PropTypes.func
}

export default CardDetail;