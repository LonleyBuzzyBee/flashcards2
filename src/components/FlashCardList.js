import React from "react";
import PropTypes from "prop-types";
import Card from "./FlashCard";

function CardList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.cardList).map((card) => {
        return <Card
          whencardClicked={props.oncardSelection}
          title={card.title}
          category={card.category}
          content={card.content}
          id={card.id}
          key={card.id} />
      })}
    </React.Fragment>
  )
};

CardList.propTypes = {
  cardList: PropTypes.object,
  oncardSelection: PropTypes.func
}

export default CardList;