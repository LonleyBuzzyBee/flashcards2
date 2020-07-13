import React from "react";
import PropTypes from "prop-types";

function CardDetail(props){
  const { card } = props;


  return (
    <React.Fragment>
       <h3>{card.title} - {card.category}</h3>
        <p> {card.content} </p>
      <hr/>
    </React.Fragment>
  );
}

CardDetail.propTypes = {
  card: PropTypes.object
}

export default CardDetail;