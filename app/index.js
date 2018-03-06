const express = require('express');
const app = express();
const routes = require('./api');

const port = process.env.PORT || 3000;

app.use('/', routes);
app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());

app.listen(port, function() {
  console.log("Server running on http://localhost:" + port);
});
