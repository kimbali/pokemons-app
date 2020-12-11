const validateEmail = require('../utils/validate-email');

const logic = {
    _url: 'http://localhost:8080',
    url: 'https://git.heroku.com/pokemon-api-haufe.git',

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

    createCatalog() {
        return Promise.resolve()
            .then(() => {
                return this._call('catalog', 'GET', { 'Content-Type': 'application/json' }, undefined, 200)
            })
            .then(res => res.json())
    },

}

module.exports = logic