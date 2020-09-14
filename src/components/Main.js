import React from 'react';

function Main() {

    function handleEditAvatarClick() {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    }


    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('popup_opened');
    }


    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add').classList.add('popup_opened');
    }

    return(
        <main className="content">

            <section className="profile">
                <div className="profile__avatar">
                    <button className="profile__avatar-edit-button" type="button" onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <button className="button profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                    <p className="profile__job"></p>
                </div>
                <button className="button profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
            </section>

            <ul className="gallery"></ul>

        </main>    
    )
}

export default Main;