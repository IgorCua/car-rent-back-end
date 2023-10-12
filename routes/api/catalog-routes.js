const express = require('express');
const filterUpdateSchema = require('../../schemas/filter');

const {
    getCarsList,
    getFilteredList,
    getFavoritesList,
    updateFavorite
} = require('../../controllers/catalog-controller');
const validateBody = require('../../utils/validateBody');
const updateFavoriteSchema = require('../../schemas/updateFavorite');

const router = express.Router();

router.get('/', getCarsList);
router.get('/filtered', validateBody(filterUpdateSchema), getFilteredList);
router.get('/favorites', getFavoritesList);
router.patch('/favorites', validateBody(updateFavoriteSchema), updateFavorite);

module.exports = router;