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
        author: "Bomdi Zane, +372 5875 7661, dzedock@yahoo.com",
    },
    security: {
        cookieSeret: '',
        sessionSecret: '',
        saltRounds: 10,
    },
    database: {
        databaseHost: 'localhost',
        databasePort: '3306',
        databaseName: '',
        databaseUserName: 'Bomdi Zane',
        databaseUserPassword: 'Troycastrabay1001',
    },
};

config.test = {
    envName : 'test',
    root: rootPath,
    app: {
        port: process.env.PORT || 3000,
        description: '',
        keywords: '',
        author: "Bomdi Zane, +372 5875 7661, dzedock@yahoo.com",
    },
    security: {
        cookieSeret: '',
        sessionSecret: '',
        saltRounds: 10,
    },
    database: {
        databaseHost: '___.mysql.database.azure.com',
        databasePort: '3306',
        databaseName: '',
        databaseUserName: 'bomdizane@___',
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
        author: "Bomdi Zane, +372 5875 7661, dzedock@yahoo.com",
    },
    security: {
        cookieSeret: '',
        sessionSecret: '',
        saltRounds: 10,
    },
    database: {
        databaseHost: '___.mysql.database.azure.com',
        databasePort: '3306',
        databaseName: '',
        databaseUserName: 'bomdizane@___',
        databaseUserPassword: '',
    },
};

module.exports = typeof(config[env]) === 'object' ? config[env] : config.development;