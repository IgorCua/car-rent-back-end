const express = require('express');

const {
    getCarsList
} = require('../../controllers/catalog-controller');

const router = express.Router();

router.get('/', getCarsList);

module.exports = router;