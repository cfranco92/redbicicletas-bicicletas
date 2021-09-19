const store = require('./store');

function addBicycle(name) {
    if (!name) {
        return Promise.reject('Invalid name');
    }

    const bicycle = {
        name,
    };
    return store.add(bicycle);
}

function listBicycles() {
    return store.list();
}

module.exports = {
    addBicycle,
    listBicycles,
}