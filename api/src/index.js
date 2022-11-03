// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// }

const express = require('express');

const sequelize = require('../db/postgres');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});

app.use('/dev', require('./routes/dev'));
app.use('/users', require('./routes/users'));

(async () => {
    try {
        await sequelize.sync({ force: false });
        const port = process.env.EXTERNAL_PORT || 3001;

        app.listen(port, () => {
            console.log('connected to port:', port);
        });
    } catch (error) {
        console.error(error);
    }
})();
