const express = require('express');

const {
    getCarsList,
    getFilteredList
} = require('../../controllers/catalog-controller');

const router = express.Router();

router.get('/', getCarsList);

// router.get('/')

module.exports = router;