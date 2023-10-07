const { httpError } = require('../helpers/index');

const validateBody = schema => {
    const fn = (req, _, next) => {
        const {error} = schema.validate(req.body, {
            abortEarly: false,
            errors: {
                warp: {
                    label: false
                }
            }
        });

        if(error) {
            console.log("ERROR", error);
            console.log("ERROR _ORIGINAL", error._original);
        }

        next();
    }

    return fn;
}

module.exports = validateBody;