import React from 'react';
import {userApi} from '../utils/Api.js'

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
        userApi.getItems()
        .then(res => {
            setUserName(res.name);
        })
    }, []);

    React.useEffect(() => {
        userApi.getItems()
        .then(res => {
            setUserDescription(res.about);
        })
    }, []);

    React.useEffect(() => {
        userApi.getItems()
        .then(res => {
            console.log(res)
            setUserAvatar(res.avatar);
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

            <ul className="gallery"></ul>

        </main>    
    )
}

export default Main;