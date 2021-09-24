const store = require('./store');

function addBicycle(bicycleId, color, model, latitude, longitude,) {
    if (!bicycleId) {
        return Promise.reject('Invalid id');
    }
    let user = ''
    const bicycle = {
        bicycleId,
        color,
        model,
        latitude,
        longitude,
        user
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

function updateBicycleById(id, bicycleId, color, model, latitude, longitude, user) {
    return new Promise(async (resolve, reject) => {

        const bicycle = {
            bicycleId, color, model, latitude, longitude, user
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