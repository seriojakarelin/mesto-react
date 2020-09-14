import React from 'react';

function PopupWithForm(props) {
    return(
        <section className={`popup popup_type_${props.name}`}>
            <div className={`popup__container_type_${props.name} popup__container`}>
                <button className={`popup__close-button popup__close-button_type_${props.name} button`} type="button"></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__forms popup__forms_type_${props.name}`} name={props.name} novalidate>
                    {props.children}
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;