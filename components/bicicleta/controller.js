const store = require('./store');

function addBicicleta(name) {
    if (!name) {
        return Promise.reject('Invalid name');
    }

    const bicicleta = {
        name,
    };
    return store.add(bicicleta);
}

function listBicicletas() {
    return store.list();
}

module.exports = {
    addBicicleta,
    listBicicletas,
}