const routes = require('express').Router();
const request = require('request');


routes.get('/api/items', (req, res) => {
  const URL = "https://api.mercadolibre.com/sites/MLA/search?q=" + req.query.q;
  request(URL, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      return res.sendStatus(500);
    }
    res.send(JSON.parse(body));
    //res.render('index', { title : 'Main page', news : JSON.parse(body) });
  });
});

module.exports = routes;
