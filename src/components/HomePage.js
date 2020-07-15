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
      selectedCard: null,
      editing: false
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
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
  }


  handleClick = () => {
    if (this.state.editing !== false) {
      this.setState({ editing: false });
      const { dispatch } = this.props;
      const action = {
        type: 'EDIT_FLASH_CARD'
      }
      dispatch(action);
    }
    else if (this.state.selectedCard != null) {
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

  handleEditingCardInList = () => {
    if (this.state.editing) {
      this.setState({ editing: false })
    }
    else {
      this.setState({
        editing: true
      });
    }
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonClick = null;
    let button2 = null;
    let button2Text = null;
   

    if (this.state.editing) {
    currentlyVisibleState= <EditFlashCard
          card={this.state.selectedCard}
          onEditCard={this.handleEditingCardInList}/>
          buttonClick = this.handleClick;
          buttonText = "back to flash card list";
    }
    else if (this.state.selectedCard != null) {
      currentlyVisibleState =
        <CardDetail
          onEditClick={this.handleEditingCardInList}
          card={this.state.selectedCard}
           />
      buttonText = "Return to flash Card List";
      buttonClick = this.handleClick;

    } else if (this.props.formVisibleOnPage === "home-page") {
      currentlyVisibleState =
      <Home/>
      buttonText = "See All Flash Cards"
      buttonClick = this.handleClick;
    }
    else if (this.props.formVisibleOnPage === "see-form") {
      currentlyVisibleState = <NewCardForm onNewCardCreation={this.handleAddingNewCardToList} />;
      buttonText = "Return to home page";
      buttonClick = this.handleClick;
      button2 =  "Return to list";
      button2Text =  this.homeClick;
      
    } else if (this.props.formVisibleOnPage === "flash-card-list") {
      currentlyVisibleState = <CardList
      cardList={this.state.masterCardList}
      onCardSelection={this.handleChangingSelectedCard} />;
      
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