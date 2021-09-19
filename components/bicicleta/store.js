const Model = require('./model');

function addBicicleta(bicicleta) {
    const myBicicleta = new Model(bicicleta);
    return myBicicleta.save();
}

function listBicicletas() {
    return Model.find();
}

module.exports = {
    add: addBicicleta,
    list: listBicicletas,
}