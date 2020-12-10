const logic = {
    url: 'http://localhost:8080',

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

    createCatalog() {
        return Promise.resolve()
            .then(() => {
                return this._call('catalog', 'GET', { 'Content-Type': 'application/json' }, undefined, 200)
            })
            .then(res => res.json())
            .then(res => res)
    },

}

module.exports = logic