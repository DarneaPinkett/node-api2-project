const express = require('express');

const apiRoutes = require('./apiRoutes');

const server = express();

server.use(express.json());

server.use('/api', apiRoutes);

server.listen(8000, () => console.log('API running on port 8000'));