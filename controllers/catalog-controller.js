const { httpError } = require("../helpers");
const ctrlWrapper = require("../utils/ctrlWrapper");
const Catalog = require("../models/catalog");

const getCarslist = async (res, req) => {
    // const { page = 1, limit = 8 } = req.query;
    // const skip = (page - 1) * limit;
    const catalogList = Catalog.find({});

    res.json(catalogList);
}

module.exports = {
    getCarsList: ctrlWrapper(getCarslist)
}