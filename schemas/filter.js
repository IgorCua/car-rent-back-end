const Joi = require('joi');

const filterUpdateSchema = Joi.object({
    make: Joi.string().optional(),
    rentalPrice: Joi.number().optional(),
    mileageFrom: Joi.number().optional(),
    mileageTo: Joi.number().optional()
})

module.exports = filterUpdateSchema;