import React from "react";
import PropTypes from "prop-types";
import Card from "./FlashCard";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function CardList(props) {
  useFirestoreConnect([
    {
      collection: 'cards' }
  ]);

  const cards = useSelector(state => state.firestore.ordered.cards);
  
  if (isLoaded(cards)) {
    
    return (
      <React.Fragment>
        {cards.map((card) => {
          return <Card
            whenCardClicked={props.onCardSelection}
            title={card.title}
            category={card.category}
            content={card.content}
            id={card.id}
            key={card.id} />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

CardList.propTypes = {
  // cardList: PropTypes.object,
  onCardSelection: PropTypes.func
}

export default CardList;