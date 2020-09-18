import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 

    return(
        <li className="gallery__card" onClick={handleClick}>
            <button className="gallery__trash-button button" type="button"></button>
            <img className="gallery__photo" src={props.card.link} alt={props.card.name} />
            <div className="gallery__info-container">
                <h2 className="gallery__photo-title">{props.card.name}</h2>
                <div className="gallery__like-container">
                    <button className="gallery__like-button button" type="button"></button>
                    <p className="gallery__like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;