const Joi = require('joi');

const filterUpdateSchema = Joi.object({
    make: Joi.string().allow(null, '').optional(),
    rentalPrice: Joi.number().allow(null, '').optional(),
    mileageFrom: Joi.number().allow(null, '').optional(),
    mileageTo: Joi.number().allow(null, '').optional()
});

module.exports = filterUpdateSchema;