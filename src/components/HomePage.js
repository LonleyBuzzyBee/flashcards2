import React from 'react';
import NewCardForm from './NewFlashCardForm';
import CardList from './FlashCardList';
import Home from './Home';
import CardDetail from './FlashCardDetail';
import EditFlashCard from './EditFlashCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // homeClick = () => {
  //   const { dispatch } = this.props;
  //   const action = {
  //     type: 'HOME_PAGE'
  //   }
  //   dispatch(action);
  // }

  handleClickAddCard = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleForm());
  }


  handleClick = () => {
    const { dispatch } = this.props;
     if (this.props.selectedCard != null) {
       dispatch(a.setSelectedCard(null));
    } else if (this.props.formVisibleOnPage) {
      dispatch(a.toggleForm());
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonClick = null;
    let button2 = null;
    let button2Text = null;
   

    if (this.props.editing) { // editing: true, selectedCard: some ID
    currentlyVisibleState = <EditFlashCard/>
          buttonClick = this.handleClick;
          buttonText = "back to flash card list";
    }
    else if (this.props.selectedCard != null) { 
      currentlyVisibleState =
        <CardDetail/>
      buttonText = "Return to flash Card List";
      buttonClick = this.handleClick;

    // } else if (this.props.homePageVisible) {
    //   currentlyVisibleState =
    //   <Home/>
    //   buttonText = "See All Flash Cards"
    //   buttonClick = this.handleClick;
    }
    else if (this.props.formVisibleOnPage === true) {
      currentlyVisibleState = <NewCardForm />;
      buttonText = "Return to home page";
      buttonClick = this.handleClick;
      button2 =  "Return to list";
      button2Text =  this.homeClick;
      
    } 
    else 
    {
      currentlyVisibleState = <CardList />;   
      buttonText = "Add Post";
      buttonClick = this.handleClickAddCard;
      button2 =  "Return to list";
      button2Text =  this.homeClick;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={buttonClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  selectedCard: PropTypes.string,
  formVisibleOnPage: PropTypes.bool,
  homePageVisible: PropTypes.bool,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    selectedCard: state.selectedCard,
    editing: state.editing,
    homePageVisible: state.homePageVisible,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

HomePage = connect(mapStateToProps)(HomePage);

export default withFirestore(HomePage);