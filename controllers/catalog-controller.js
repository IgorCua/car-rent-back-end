const { 
    httpError,
    filterHandler
 } = require("../helpers");
const ctrlWrapper = require("../utils/ctrlWrapper");
const Catalog = require("../models/catalog");

const getCarslist = async (req, res) => {
    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;
    console.log(req.query);
    const catalogList = await Catalog.find('', '', {skip, limit});
    res.json(catalogList);
    // console.log(catalogList);
}

const getFilteredList = async (req, res) => {
    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;
    const catalogList = await Catalog.find(filterHandler(req.query), '', {skip, limit});
    // console.log('req.query', req.query);
    res.json(catalogList);
}

const getFavoritesList = async (req, res) => {
    const favoriteList = await Catalog.find({favorite: true});
    res.json(favoriteList);
}

const updateFavorite = async (req, res) => {
    const response = await Catalog.changeOne(
        {_id: ''},
        {favorite: ''}
    );
}

module.exports = {
    getCarsList: ctrlWrapper(getCarslist),
    getFilteredList: ctrlWrapper(getFilteredList),
    getFavoritesList: ctrlWrapper(getFavoritesList),
    updateFavorite: ctrlWrapper(updateFavorite)
}