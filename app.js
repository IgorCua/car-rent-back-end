const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const catalogRouter = require('./routes/api/catalog-routes');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/catalog/', catalogRouter);

app.use((err, _, res, __) => {
    res.status(404).json({
        status: 'error',
        code: 404,
        // message:'error message',
        data: 'Not found'
    });
});

app.use((err, _, res, __) => {
    console.log(err);
    const {status = '500', message = 'Internal error'} = err;

    res.status(status).json({
        message
    });
})

module.exports = app;