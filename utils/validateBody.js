const { httpError } = require('../helpers/index');

const validateBody = schema => {
    const fn = (req, _, next) => {

        const {error} = schema.validate(req.query, {
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