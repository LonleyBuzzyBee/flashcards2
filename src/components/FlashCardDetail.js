import React from "react";
import PropTypes from "prop-types";
import { useFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import * as a from "../actions";
import { connect, useSelector } from "react-redux";

function CardDetail(props){
  const firestore = useFirestore(); 
  const { dispatch } = props;
  useFirestoreConnect([
    {
      collection: 'cards',
      doc: props.selectedCard
    }
  ]);
  
  
  function handleDeletingCard(id) {
    firestore.delete({collection: 'cards', doc: id});
    //Return to card list mode: what variables/reducers need to be updated?
    dispatch(a.setSelectedCard(null));
  }

  const card = useSelector(state => state.firestore.ordered.cards)[0];
  
  function onEditCard() {
    dispatch(a.editCard());//edit-reducer set editing  
  }
  
  if (isLoaded(card)) {
  return (
    <React.Fragment>
        <h3>{card.title} - {card.category}</h3>
        <p> {card.content} </p>
      <button onClick={onEditCard}>edit this thing</button>
      <button onClick={() => handleDeletingCard(props.selectedCard)}>delete this thing</button>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <h3>woooooo Loading...</h3>
      </React.Fragment>
    )
  }
}

CardDetail.propTypes = {
  selectedCard: PropTypes.string,
  editing:PropTypes.bool
};

const mapStateToProps = state => {
  return {
    selectedCard: state.selectedCard,
    editing: state.editing
  }
};


export default connect(mapStateToProps)(CardDetail);

