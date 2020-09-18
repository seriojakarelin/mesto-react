import React from 'react';
import Card from './Card.js';
import {userApi, cardsApi} from '../utils/Api.js'

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        userApi.getItems()
        .then(res => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    React.useEffect(() => {
        cardsApi.getItems()
        .then(initialCards => {
            setCards(initialCards);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return(
        <main className="content">

            <section className="profile">
                <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
                    <button className="profile__avatar-edit-button" type="button" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="button profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="button profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>

            <ul className="gallery">
                
                {cards.map((card) =>
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                )}

            </ul>

        </main>    
    )
}

export default Main;