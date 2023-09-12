const handleMongooseError = (error, _, next) => {
    const { name, code } = error;
    // console.log(error)
    // console.log(name,code)
    error.status = (code === 11000 && name === 'MongoServerError') ? 409 : 400;
    // error.staus = 400;
    next();
}

module.exports = handleMongooseError;