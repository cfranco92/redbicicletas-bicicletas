const Model = require('./model');

function addBicycle(bicycle) {
    const myBicycle = new Model(bicycle);
    return myBicycle.save();
}

async function getBicycleById(filterBicycle) {
    let filter = {};
    if (filterBicycle !== null) {
        filter = { _id: filterBicycle };
    }
    const bicycle = await Model.find(filter);
    return bicycle;
}

async function updateBicycle(id, name, user) {
    const founBicycle = await Model.findOne({
        _id: id
    });
    founBicycle.name = name
    founBicycle.user = user

    const newStatus = await founBicycle.save();
    return newStatus;
}

function deleteBicycleById() {
    return Model.deleteOne({ _id: id })
}

function listBicycle() {
    return Model.find();
}

module.exports = {
    add: addBicycle,
    getById: getBicycleById,
    list: listBicycle,
    updateById: updateBicycle,
    deleteById: deleteBicycleById,
}