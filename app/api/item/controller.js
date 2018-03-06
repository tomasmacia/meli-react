const routes = require('express').Router();
const request = require('request');
const {itemVIPParser} = require('../../commons/itemParser');


routes.get('/:id', (req, res) => {
  const URL = "https://api.mercadolibre.com/items/" + req.params.id;
  request(URL, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      return res.status(500).send("Se ha producido un error :(");
    }
    const item = itemVIPParser(JSON.parse(body));
    //res.send(itemParser(JSON.parse(body)));
    res.render('./item/index', {item : item.item});
    //res.render('index', { title : 'Main page', news : JSON.parse(body) });
  });
});

module.exports = routes;
