import React, { useState } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import './index.css';

function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setCardSelected] = React.useState(null);

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

  return (
    <div className="page">

        <Header />

        <Main 
        onEditAvatar = {handleEditAvatarClick}
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick = {handleCardClick}
        />

        <PopupWithForm
          name = 'edit'
          title = 'Редактировать профиль'
          isOpen = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          onCloseByOverlay = {closingPopupsByOverlay}>
          <input id="name-input" type="text" className="popup__input popup__input_el_name" name="user-name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span id="name-input-error" className="popup__input-error"></span>
          <input id="job-input" type="text" className="popup__input popup__input_el_job" name="user-job" placeholder="О себе" required minLength="2" maxLength="200" />
          <span id="job-input-error" className="popup__input-error"></span>
          <button className="popup__submit-button popup__submit-button_type_edit" type="submit">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm
          name = 'add'
          title = 'Новое место'
          isOpen = {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
          onCloseByOverlay = {closingPopupsByOverlay}>
          <input id="place-name-input" type="text" className="popup__input popup__input_el_place-name" name="place-name" placeholder="Название" required minLength="1" maxLength="30" />
          <span id="place-name-input-error" className="popup__input-error"></span>
          <input id="place-url-input" type="url" className="popup__input popup__input_el_place-url" name="place-url" placeholder="Ссылка на картинку" required />
          <span id="place-url-input-error" className="popup__input-error"></span>
          <button className="popup__submit-button popup__submit-button_type_add" type="submit">Создать</button>
        </PopupWithForm>

        <PopupWithForm
          name = 'avatar'
          title = 'Обновить аватар'
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          onCloseByOverlay = {closingPopupsByOverlay}>
          <input id="user-avatar-input" type="url" className="popup__input popup__input_el_user-avatar" name="user-avatar" placeholder="Ссылка на картинку" required />
          <span id="user-avatar-input-error" className="popup__input-error"></span>
          <button className="popup__submit-button popup__submit-button_type_avatar" type="submit">Сохранить</button>
        </PopupWithForm>

        <PopupWithImage 
          card = {selectedCard}
          onClose = {closeAllPopups}
          onCloseByOverlay = {closingPopupsByOverlay}>
        </PopupWithImage>

        <Footer />

    </div>
  );
}

export default App;
