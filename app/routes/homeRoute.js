const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send("Hello from the other side!");
});

module.exports = routes;
