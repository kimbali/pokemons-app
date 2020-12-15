const validateEmail = require('../utils/validate-email');

const logic = {
    _url: 'http://localhost:8080',
    url: 'https://desolate-temple-98220.herokuapp.com',

    _call(path, method, headers, body, expectedStatus) {
        const config = { method }

        if (headers) config.headers = headers
        if (body) config.body = body

        return fetch(`${this.url}/${path}`, config)
            .then(res => {
                if (res.status === expectedStatus) {
                    return res
                } else
                    return res.json()
                        .then(({ message }) => {
                            throw new Error(message)
                        })
            })
    },

    _validateEmail(email) {
        if (!validateEmail(email)) throw new Error('invalid email')
    },


    registarUser(email, password) {
        return Promise.resolve()
            .then(() => {
                this._validateEmail(email)
                this._validateStringField('password', password)

                return this._call('user-register', 'POST', { 'Content-Type': 'application/json' }, JSON.stringify({ email, password }), 201)
                    .then(() => true)
            })
    },

    createCatalog({ page, lang }) {
        return Promise.resolve()
            .then(() => {
                return this._call(`catalog/${page}/${lang}`, 'GET', { 'Content-Type': 'application/json' }, undefined, 200)
            })
            .then(res => res.json())
    },

    retrievePokemonById(id) {
        return Promise.resolve()
            .then(() => {
                return this._call(`pokemon/${id}`, 'GET', { 'Content-Type': 'application/json' }, undefined, 200)
            })
            .then(res => res.json())
    },

    createTypesList() {
        return Promise.resolve()
            .then(() => {
                return this._call('types', 'GET', { 'Content-Type': 'application/json' }, undefined, 200)
            })
            .then(res => res.json())
    },

    findPokemonsByType({ type, lang }) {
        console.log('type app', type)
        return Promise.resolve()
            .then(() => {
                return this._call(`type/${type}/${lang}`, 'GET', { 'Content-Type': 'application/json' }, undefined, 200)
            })
            .then(res => res.json())
    }

}

module.exports = logic