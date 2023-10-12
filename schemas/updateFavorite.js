const Joi = require('joi');

const updateFavoriteSchema = Joi.object({
    _id: {
        type: String
    },
    favorite: {
        type: Boolean
    }
});

module.exports = updateFavoriteSchema;