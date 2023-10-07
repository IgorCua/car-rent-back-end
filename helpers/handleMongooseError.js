const handleMongooseError = (error, _, next) => {
    const { name, code } = error;
    
    error.status = (code === 11000 && name === 'MongoServerError') ? 409 : 400;
    
    next();
}

module.exports = handleMongooseError;