'use strict';

const server = require('./server');
const PORT = 8080;

// Start server.
server.listen(PORT, () => {
    console.log('server is running in http://localhost at port ' + 8080); 
});
