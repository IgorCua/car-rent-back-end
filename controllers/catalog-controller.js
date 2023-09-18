const { httpError } = require("../helpers");
const ctrlWrapper = require("../utils/ctrlWrapper");
const Catalog = require("../models/catalog");

const getCarslist = async (req, res) => {
    // const { page = 1, limit = 8 } = req.query;
    // const skip = (page - 1) * limit;
    // console.log(req);

    const catalogList = await Catalog.find();
    console.log(catalogList);
    res.json(catalogList);
}

module.exports = {
    getCarsList: ctrlWrapper(getCarslist)
}