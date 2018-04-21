/*
 * Create and export configuration variables
 *
 */
const path = require('path'),
    rootPath = path.normalize(`${__dirname}/..`),
    env = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

let config = {};

config.development = {
    envName : 'development',
    root: rootPath,
    app: {
        port: process.env.PORT || 3000,
        description: 'App description',
        keywords: 'app, key, words',
        author: "Bomdi Zane, +372 1111 0000, example@domain.com",
    },
    security: {
        cookieSeret: 'cookiesecret',
        sessionSecret: 'sessionsecret',
        saltRounds: 10,
    },
    database: {
        databaseHost: 'localhost',
        databasePort: '3306',
        databaseName: 'db_name',
        databaseUserName: 'Bomdi Zane',
        databaseUserPassword: 'password',
    },
};

config.test = {
    envName : 'test',
    root: rootPath,
    app: {
        port: process.env.PORT || 3000,
        description: 'App description',
        keywords: 'app, key, words',
        author: "Bomdi Zane, +372 1111 0000, example@domain.com",
    },
    security: {
        cookieSeret: 'cookiesecret',
        sessionSecret: 'sessionsecret',
        saltRounds: 10,
    },
    database: {
        databaseHost: 'localhost',
        databasePort: '3306',
        databaseName: 'db_name',
        databaseUserName: 'Bomdi Zane',
        databaseUserPassword: 'password',
    },
};

config.production = {
    envName : 'production',
    root: rootPath,
    app: {
        port: process.env.PORT || 3000,
        description: 'App description',
        keywords: 'app, key, words',
        author: "Bomdi Zane, +372 1111 0000, example@domain.com",
    },
    security: {
        cookieSeret: 'cookiesecret',
        sessionSecret: 'sessionsecret',
        saltRounds: 10,
    },
    database: {
        databaseHost: '1.mysql.database.azure.com',
        databasePort: '3306',
        databaseName: '1',
        databaseUserName: 'bomdizane@1',
        databaseUserPassword: 'password',
    },
};

module.exports = typeof(config[env]) === 'object' ? config[env] : config.development;