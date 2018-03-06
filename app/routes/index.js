const routes = require('express').Router();
const home = require('./homeRoute');
const listing = require('./searchRoute');
const item = require('./itemRoute');

// url mappings
routes.use('/', home);
routes.use('/', listing);
routes.use('/', item);

module.exports = routes;
