import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithImage from './components/PopupWithImage.js';
import EditProfilePopup from './components/EditProfilePopup.js';
import EditAvatarPopup from './components/EditAvatarPopup.js';
import AddPlacePopup from './components/AddPlacePopup.js';
import {CurrentUserContext} from './contexts/CurrentUserContext.js';
import {userApi, userAvatarApi, cardsApi, likeApi} from './utils/Api.js';
import './index.css';

function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setCardSelected] = React.useState(null);
const [currentUser, setCurrentUser] = React.useState('');
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  cardsApi.getItems()
  .then(initialCards => {
      setCards(initialCards);
  })
  .catch((err) => {
      console.log(err);
  })
}, []);

React.useEffect(() => {
  userApi.getItems()
  .then(res => {
      setCurrentUser(res);
  })
  .catch((err) => {
      console.log(err);
  })
}, []);

function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if(!isLiked) {
        likeApi.putItem(card)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch((err) => {
            console.log(err);
        })
    } else {
        likeApi.deleteItem(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

function handleCardDelete(card) {

    const isDeletable = card.owner._id === currentUser._id;

    if (isDeletable) {
        cardsApi.deleteItem(card._id)
        .then((res) => {
          const newCards = cards.filter((c) => c._id !== card._id);
          setCards(newCards);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true);
}


function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}


function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
}

function closeAllPopups() {
  setIsEditProfilePopupOpen();
  setIsAddPlacePopupOpen();
  setIsEditAvatarPopupOpen();

  setCardSelected();
}

function closingPopupsByOverlay(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  } 

  closeAllPopups();
}

function handleCardClick(card) {
  setCardSelected(card);
}

function handleUpdateUser(newUser) {
  userApi.changeItem(newUser)
  .then(res => {
      setCurrentUser(res);
  })
  .catch((err) => {
      console.log(err);
  })

  closeAllPopups();
}

function handleUpdateAvatar(newAvatar) {
  userAvatarApi.changeItem(newAvatar)
  .then(res => {
      setCurrentUser(res);
  })
  .catch((err) => {
      console.log(err);
  })

  closeAllPopups();
}

function handleAddPlace(newCard) {
  cardsApi.createItem(newCard)
  .then(res => {
      setCards([res, ...cards]);
  })
  .catch((err) => {
      console.log(err);
  })

  closeAllPopups();
}

  return (
    <div className="page">

      <CurrentUserContext.Provider value={currentUser}>

        <Header />

        <Main 
        onEditAvatar = {handleEditAvatarClick}
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick = {handleCardClick}
        cards = {cards}
        onCardLike = {handleCardLike}
        onCardDelete = {handleCardDelete}
        />

        <EditProfilePopup
          isOpen = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          onCloseByOverlay = {closingPopupsByOverlay}
          onUpdateUser = {handleUpdateUser}>
        </EditProfilePopup>

        <AddPlacePopup
          isOpen = {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
          onCloseByOverlay = {closingPopupsByOverlay}
          onAddPlace = {handleAddPlace}>

        </AddPlacePopup>

        <EditAvatarPopup
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          onCloseByOverlay = {closingPopupsByOverlay}
          onUpdateAvatar = {handleUpdateAvatar}>
        </EditAvatarPopup>

        <PopupWithImage 
          card = {selectedCard}
          onClose = {closeAllPopups}
          onCloseByOverlay = {closingPopupsByOverlay}>
        </PopupWithImage>

        <Footer />

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
