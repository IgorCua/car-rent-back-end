// const { number } = require("joi");
const { handleMongooseError } = require("../helpers");

const { Schema, model } = require('mongoose');

const catalogSchema = new Schema ({
    year:{
        type: Number
    },
    make:{
        type: String
    },
    model:{
        type: String
    },
    type:{
        type: String
    },
    img:{
        type: String
    },
    description:{
        type: String
    },
    fuelConsumption:{
        type: String
    },
    engineSize:{
        type: String
    },
    accessories:{
        type: Array
    },
    functionalities:{
        type: Array
    },
    rentalPrice:{
        type: Array
    },
    rentalCompany:{
        type: Array
    },
    adress:{
        type: String
    },
    rentalConditions:{
        type: String
    },
    mileage:{
        type: Number
    }
},{
    versionKey: false,
});

const Catalog = model('catalog', catalogSchema);

catalogSchema.post('save', handleMongooseError);

module.exports = Catalog;