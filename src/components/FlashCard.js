import React from "react";
import PropTypes from "prop-types";
import * as a from "../actions";
import { connect } from "react-redux";


function Card(props) {
  const { dispatch } = props;
  return (
    <React.Fragment>
      <div onClick={() => dispatch(a.setSelectedCard(props.id))}>
        <h3>{props.title} - {props.category}</h3>
      </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  content: PropTypes.string,
  selectedCard: PropTypes.string

};

const mapStateToProps = state => {
  return {
    selectedCard: state.selectedCard
  }
};

export default connect(mapStateToProps)(Card);

