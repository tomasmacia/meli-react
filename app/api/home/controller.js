const routes = require('express').Router();

routes.get('/', (req, res) => {
  //res.send("Hello from the other side!");
  res.render('./index');
});

module.exports = routes;
