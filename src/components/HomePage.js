import React from 'react';
import NewCardForm from './NewFlashCardForm';
import CardList from './FlashCardList';
import CardDetail from './FlashCardDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore } from 'react-redux-firebase'




class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null
    }
  }

  flashCardListClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'FLASH_CARD_LIST'
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
        type: 'POST_LIST'
      }
      dispatch(action)
    } else if (this.props.formVisibleOnPage === 'see-form' || this.props.formVisibleOnPage === 'landing-page') {
      const { dispatch } = this.props;
      const action = {
        type: 'POST_LIST'
      }
      dispatch(action);
    }
  }




  handleAddingNewCardToList = (newCard) => {
    const { dispatch } = this.props;
    const { id, title, category, content,} = newCard;
    const action = {
      type: 'ADD_FLASH_CARD',
      id: id,
      title: title,
      category: category,
      content: content,

    }
    console.log(newCard);
    dispatch(action);
    const action2 = {
      type: 'FLASH_CARD_LIST'
    }
    dispatch(action2);
  }

  handleChangingSelectedCard = (id) => {
    const selectedCard = (this.props.masterCardList).filter(card => card.id === id)[0];
    this.setState({ selectedCard: selectedCard });
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

    } else if (this.props.formVisibleOnPage === "flash-card-list") {
      currentlyVisibleState = <CardList />
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
        cardList={this.props.masterCardList}
        onCardSelection={this.handleChangingSelectedCard} />;
     
      buttonText = "Add Post";
      buttonClick = this.handleClickAddCard;
      button2 = <button onClick={this.landingPageClick}>Return Home</button>
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

export default HomePage;