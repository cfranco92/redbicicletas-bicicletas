// By Cristian Franco
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// END-POINTS
router.post('/', createBicycle);
router.get('/:id', getBicycleById)
router.get('/', getBicycles);
router.put('/:id', updateBicycle);
router.delete('/:id', deleteBicycle);

function createBicycle(req, res) {
    controller.addBicycle(req.body.bicycleId, req.body.color, req.body.model, req.body.latitude, req.body.longitude)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
};

function getBicycleById(req, res) {
    controller.getBicycleById(req.params.id)
        .then((bicycle) => {
            response.success(req, res, bicycle, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
}

function getBicycles(req, res) {
    controller.listBicycles()
        .then(bicicletas => {
            response.success(req, res, bicicletas, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
};

function updateBicycle(req, res) {
    controller.updateBicycleById(req.params.id,
        req.body.bicycleId, req.body.color, req.body.model, req.body.latitude, req.body.longitude, req.body.user
    )
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
}

function deleteBicycle(req, res) {
    controller.deleteBicycleById(req.params.id)
        .then(() => {
            response.success(req, res, `Bicycle ${req.params.id} deleted`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })
}



module.exports = router;