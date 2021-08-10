require('dotenv').config();

if (process.env.NODE_ENV === 'production') require('./build/server');
else require('./src/server');