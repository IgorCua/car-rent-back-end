const { httpError } = require("../helpers");
const ctrlWrapper = require("../utils/ctrlWrapper");
const Catalog = require("../models/catalog");

const getCarslist = async (req, res) => {
    // const { page = 1, limit = 8 } = req.query;
    // const skip = (page - 1) * limit;
    console.log(req.query);
    const catalogList = await Catalog.find();
    res.json(catalogList);
    // console.log(catalogList);
}

const getFilteredList = async (req, res) => {
    const catalogList = await Catalog.find();
    console.log(req.query);
}

module.exports = {
    getCarsList: ctrlWrapper(getCarslist),
    getFilteredList: ctrlWrapper(getFilteredList)
}