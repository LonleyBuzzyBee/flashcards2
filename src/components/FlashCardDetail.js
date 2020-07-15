import React from "react";
import PropTypes from "prop-types";


function CardDetail(props){
  const { card, onEditCard, onDeleteCard } = props;



  return (
    <React.Fragment>
       <h3>{card.title} - {card.category}</h3>
        <p> {card.content} </p>
      <button onClick={onEditCard}>edit this thing</button>
      <button onClick={onEditCard}>edit this thing</button>
    </React.Fragment>
  );
}

CardDetail.propTypes = {
  card: PropTypes.object,
  onEditCard: PropTypes.func,
  onDeleteCard: PropTypes.func
}



export default CardDetail;