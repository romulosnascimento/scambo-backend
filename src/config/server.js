const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const formData = require('express-form-data');
const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(formData.parse());
server.use(allowCors);

server.listen(port, function() {
    console.log(`Scambo backend is running on port ${port}.`);
})

module.exports = server;