const { httpError } = require('../helpers/index');

const validateBody = schema => {
    const fn = (req, _, next) => {
        const {
            make,
            rentalPrice,
            mileageFrom,
            mileageTo
        } = req.query;
        const obj = {
            make: make,
            rentalPrice: (isNaN(+rentalPrice)) ? NaN : rentalPrice,
            mileageFrom: (isNaN(+mileageFrom)) ? NaN : mileageFrom,
            mileageTo: (isNaN(+mileageTo)) ? NaN : mileageTo
        }

        console.log("OBJ", obj);
        console.log("REQ BODY", req.query);

        const {error} = schema.validate(obj, {
            abortEarly: false,
            errors: {
                warp: {
                    label: false
                }
            }
        });

        if(error) {
            console.log("ERROR", error.message);
            // console.log("ERROR _ORIGINAL", error._original);
            throw httpError(400, 'wrong data');
        }
        // console.log(req.query);

        next();
    }

    return fn;
}

module.exports = validateBody;