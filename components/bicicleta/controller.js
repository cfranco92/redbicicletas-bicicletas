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

function getBicycleById(filterBicycle) {
    return new Promise((resolve, reject) => {
        resolve(store.getById(filterBicycle));
    });
}

function listBicycles() {
    return store.list();
}

function updateBicycleById(id, name, user) {
    return new Promise(async (resolve, reject) => {
        if (!id || !name) {
            reject('Invalid data');
            return false;
        }

        const bicycle = {
            name,
            user
        }

        const result = await store.updateById(id, bicycle);

        resolve(result);
    })
}

function deleteBicycleById(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid Id');
            return false;
        }
        store.deleteById(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}

module.exports = {
    addBicycle,
    getBicycleById,
    listBicycles,
    updateBicycleById,
    deleteBicycleById
}