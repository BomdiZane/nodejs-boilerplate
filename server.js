// const cluster = require('cluster');

// if (cluster.isMaster){
//     // Master cluster

//     const numCPUs = require('os').cpus().length;
//     console.log(`Forking ${numCPUs} CPUs`);
//     for (let i = 0; i < numCPUs; i++) cluster.fork();
//     cluster.on('exit', () => cluster.fork());
// }
// else{
    // Child cluster
    const express = require('express'),
        config = require('./config/credentials'),
        app  = express();

        
    app.listen(config.app.port, () => console.log(`Server started on port ${config.app.port}`));
    
    module.exports = require('./config/express')(app, config);
// }
