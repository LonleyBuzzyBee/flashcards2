import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';


function CardDetail(props){
  const firestore = useFirestore(); 

  function handleDeletingCard(id) {
    firestore.delete({collection: 'cards', doc: id});
    props.onDeleteCard();
  }
  const { card, onEditCard } = props;
  return (
    <React.Fragment>
       <h3>{card.title} - {card.category}</h3>
        <p> {card.content} </p>
      <button onClick={onEditCard}>edit this thing</button>
      <button onClick={() => handleDeletingCard(card.id)}>delete this thing</button>
    </React.Fragment>
  );
}


CardDetail.propTypes = {
  card: PropTypes.object,
  onEditCard: PropTypes.func,
  onDeleteCard: PropTypes.func
}



export default CardDetail;

