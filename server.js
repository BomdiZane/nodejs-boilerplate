const cluster = require('cluster'),
      express = require('express'),
      config = require('./config/credentials');



if (cluster.isMaster){
    // Master cluster

    const numCPUs = require('os').cpus().length;
    console.log(`Forking ${numCPUs} CPUs`);
    for (let i = 0; i < numCPUs; i++) cluster.fork();
    cluster.on('exit', () => cluster.fork());
}
else{
    // Child cluster
    app  = express();

    module.exports = require('./config/express')(app, config);

    app.listen(
        config.app.port,
        () => console.log(`Server (Process ID: ${process.pid}) started on http://localhost:${config.app.port}. press Ctrl-C to terminate.`)
    );
}
