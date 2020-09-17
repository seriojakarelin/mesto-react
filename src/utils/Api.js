class Api {
    constructor( {url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    getItems() {
        return fetch(this._url, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    createItem(item) {
        return fetch(this._url, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(item)
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    changeItem(item) {
        return fetch(this._url, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(item)
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    deleteItem(id) {
        return fetch(`${this._url}${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    putItem(item) {
        return fetch(`${this._url}${item._id}`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}

const userApi = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-14/users/me', 
    headers: {
        authorization: '3264da94-6a0d-46bd-9eaf-c8758f7396fd',
        'Content-Type': 'application/json'
    }
});

const userAvatarApi = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-14/users/me/avatar', 
    headers: {
        authorization: '3264da94-6a0d-46bd-9eaf-c8758f7396fd',
        'Content-Type': 'application/json'
    }
});

export {userApi, userAvatarApi}