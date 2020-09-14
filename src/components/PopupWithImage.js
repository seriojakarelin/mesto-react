import React from 'react';

function PopupWithImage() {
    return(
        <section className="popup popup_type_view">
            <div className="popup__container popup__container_type_view">
                <button className="popup__close-button popup__close-button_type_view button" type="button"></button>
                <img alt="Картинка из галлереи mesto" className="popup__photo" />
                <p className="popup__photo-caption"></p>
            </div>
        </section>
    )
}

export default PopupWithImage;