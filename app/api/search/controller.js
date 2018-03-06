const routes = require('express').Router();
const request = require('request');
const {itemSearchParser} = require('../../commons/itemParser');


routes.get('/', (req, res) => {
  const limit = req.query.limit? "&limit=" + req.query.limit : "";
  const URL = "https://api.mercadolibre.com/sites/MLA/search?q=" + req.query.q + limit;
  request(URL, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      return res.sendStatus(500);
    }
    //res.send(itemSearchParser(JSON.parse(body).results));
    res.render('./search/index',  {
      itemList : itemSearchParser(JSON.parse(body).results).items
    });
  });
});

module.exports = routes;
