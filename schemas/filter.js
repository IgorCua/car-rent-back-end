const Joi = require('joi');

const filterUpdateSchema = Joi.object({
    make: Joi.string().allow(null, '').optional().messages({'string.base': `"make" should be a type of 'text'`}),
    rentalPrice: Joi.number().allow(null, '').optional().messages({'number.base': `"rentalPrice" should be a 'number'`}),
    mileageFrom: Joi.number().allow(null, '').optional().messages({'number.base': `"mileageFrom" should be a 'number'`}),
    mileageTo: Joi.number().allow(null, '').optional().messages({'number.base': `"mileageTo" should be a 'number'`})
})
// .messages({'any.base': `{#label}`});

module.exports = filterUpdateSchema;