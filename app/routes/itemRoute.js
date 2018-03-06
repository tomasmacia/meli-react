const routes = require('express').Router();
const request = require('request');

function itemParser(item) {
  const i = {};
  i.author = {
    name : "Tomás",
    lastname : "Macía"
  };
  i.item = {
    id : item.id,
    title : item.title,
    price : {
      currency : item.currency_id,
      amount : parseInt(item.price),
      decimals : item.price.toString().split('.')[1]? parseInt(item.price.toString().split('.')[1]) : 0
    },
    picture : item.pictures,
    condition : item.condition,
    free_shipping: item.free_shipping,
    sold_quantity: item.sold_quantity
  };
  return i;
};


routes.get('/api/items/:id', (req, res) => {
  const URL = "https://api.mercadolibre.com/items/" + req.params.id;
  request(URL, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      return res.status(500).send("Se ha producido un error :(");
    }
    res.send(itemParser(JSON.parse(body)));
    //res.render('index', { title : 'Main page', news : JSON.parse(body) });
  });
});

module.exports = routes;
