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

async function updateBicycle(id, bicycle) {
    const founBicycle = await Model.findOne({
        _id: id
    });

    founBicycle.bicycleId = bicycle.bicycleId;
    founBicycle.color = bicycle.color;
    founBicycle.model = bicycle.longitude;
    founBicycle.latitude = latitude;
    founBicycle.longitude = longitude;

    const newStatus = await founBicycle.save();
    return newStatus;
}

function deleteBicycleById(id) {
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