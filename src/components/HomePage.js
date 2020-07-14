import React from 'react';
import NewCardForm from './NewFlashCardForm';
import CardList from './FlashCardList';
import Home from './Home';
import CardDetail from './FlashCardDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase'


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null
    }
  }

  homeClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'HOME_PAGE'
    }
    dispatch(action);
  }

  handleClickAddCard = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'SEE_FORM'
    }
    dispatch(action);
  }


  handleClick = () => {
    if (this.state.selectedCard != null) {
      this.setState({
        selectedCard: null
      });
      const { dispatch } = this.props;
      const action = {
        type: 'FLASH_CARD_LIST'
      }
      dispatch(action);
      
    } else if (this.props.formVisibleOnPage === 'see-form' || this.props.formVisibleOnPage === 'home-page') {
      const { dispatch } = this.props;
      const action = {
        type: 'FLASH_CARD_LIST'
      }
      dispatch(action);
    }
  }




  handleAddingNewCardToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
 
    dispatch(action);
    const action2 = {
      type: 'FLASH_CARD_LIST'
    }
    dispatch(action2);
  }

  handleChangingSelectedCard = (id) => {
    this.props.firestore.get({ collection: 'cards', doc: id }).then((card) => {
      const firestoreCard = {
        title: card.get("title"),
        category: card.get("category"),
        content: card.get("content"),
        id: card.id
      }
      this.setState({ selectedCard: firestoreCard });
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonClick = null;
    let button2 = null;
   
    if (this.state.selectedPost != null) {
      currentlyVisibleState =
        <CardDetail
          post={this.state.selectedCard}
           />
      buttonText = "Return to flash Card List";
      buttonClick = this.handleClick;

    } else if (this.props.formVisibleOnPage === "home-page") {
      currentlyVisibleState =
      <React.Fragment > 
        <h1>this is the home page</h1>
    
      </React.Fragment>
      buttonText = "See All Flash Cards"
      buttonClick = this.handleClick;
    }
    else if (this.props.formVisibleOnPage === "see-form") {
      currentlyVisibleState = <NewCardForm onNewCardCreation={this.handleAddingNewCardToList} />;
      buttonText = "Return to home page";
      buttonClick = this.handleClick;
      button2 = <button onClick={this.flashCardListClick}>Return to list</button>

    } else if (this.props.formVisibleOnPage === "flash-card-list") {
      currentlyVisibleState = <CardList
        cardList={this.state.masterCardList}
        onCardSelection={this.handleChangingSelectedCard} />;
     
      buttonText = "Add Post";
      buttonClick = this.handleClickAddCard;
      button2 = <button onClick={this.homePageClick}>Return Home</button>
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
  masterCardList: PropTypes.object
};

const mapStateToProps = state => {

  return {
    masterFlashCardList: state.masterCardList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

HomePage = connect(mapStateToProps)(HomePage);

export default withFirestore(HomePage);