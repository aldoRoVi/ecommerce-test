require('dotenv').config();
const config = {
    dev:process.env.NODE_ENV !== 'production',
    dbHost:process.env.DB_HOST,
    dbName: process.env.DB_NAME
}

module.exports = { config };