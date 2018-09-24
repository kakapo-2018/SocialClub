const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const internal = require('./routes/internal')

const server = express();

server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, '../public')));

//API calls
server.use('/api/v1', require('./routes/internal'));

server.use('/api/v1/auth', authRoutes);

server.use('/api/ext', require('./routes/external'));

server.use('/api/posts', internal)



module.exports = server;
