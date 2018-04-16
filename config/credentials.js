/*
 * Create and export configuration variables
 *
 */
const path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

let config = {};

config.development = {
    envName : 'development',
    root: rootPath,
    app: {
        port: process.env.PORT || 3000,
        description: '',
        keywords: '',
        author: "Bomdi Zane, +372 1111 0000, example@domain.com",
    },
    security: {
        cookieSeret: '',
        sessionSecret: '',
        saltRounds: 10,
    },
    database: {
        databaseHost: 'localhost',
        databasePort: '',
        databaseName: '',
        databaseUserName: 'Bomdi Zane',
        databaseUserPassword: '',
    },
};

config.test = {
    envName : 'test',
    root: rootPath,
    app: {
        port: process.env.PORT || 3000,
        description: '',
        keywords: '',
        author: "Bomdi Zane, +372 1111 0000, example@domain.com",
    },
    security: {
        cookieSeret: '',
        sessionSecret: '',
        saltRounds: 10,
    },
    database: {
        databaseHost: '___.mysql.database.azure.com',
        databasePort: '',
        databaseName: '',
        databaseUserName: '',
        databaseUserPassword: '',
    },
};

config.production = {
    envName : 'production',
    root: rootPath,
    app: {
        port: process.env.PORT || 3000,
        description: '',
        keywords: '',
        author: "Bomdi Zane, +372 1111 0000, example@domain.com",
    },
    security: {
        cookieSeret: '',
        sessionSecret: '',
        saltRounds: 10,
    },
    database: {
        databaseHost: '___.mysql.database.azure.com',
        databasePort: '',
        databaseName: '',
        databaseUserName: '',
        databaseUserPassword: '',
    },
};

module.exports = typeof(config[env]) === 'object' ? config[env] : config.development;