const { 
    HttpError,
    filterHandler
 } = require("../helpers");
const ctrlWrapper = require("../utils/ctrlWrapper");
const Catalog = require("../models/catalog.js");
// require('mongoose').set('debug', true);

const getCarslist = async (req, res) => {
    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;
    // console.log(req.query);

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
    const {_id, favorite} = req.body;  

    const result = await Catalog.updateOne(
        {_id : _id},
        // {$set: {"favorite": false}},
        {favorite: favorite},
        { 
            // upsert: false,
            // multi: true,
            // w: 'majority' 
            new: true
        }
    );
    
    if (result.modifiedCount == 0) {
        throw HttpError(404, `Contact with id ${_id} not found.`);
    }
  
    const response = await Catalog.find({_id : _id});
    
    res.json({
        // result,
        response
    });
}

module.exports = {
    getCarsList: ctrlWrapper(getCarslist),
    getFilteredList: ctrlWrapper(getFilteredList),
    getFavoritesList: ctrlWrapper(getFavoritesList),
    updateFavorite: ctrlWrapper(updateFavorite)
}