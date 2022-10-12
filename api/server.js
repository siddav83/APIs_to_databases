const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const charactersRoutes = require('./controllers/characters')
const housesRoutes = require('./controllers/houses')

server.use('/houses', housesRoutes)
server.use('/characters', charactersRoutes)

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server
