const express = require('express');

const postRoute = require('./postRoutes');

const server = express();

server.use(express.json());




server.listen(8000, () => console.log('API running on port 8000'));