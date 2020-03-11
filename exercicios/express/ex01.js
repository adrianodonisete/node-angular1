const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('<h2>Home!</h2>');
});

app.all('/lista', function(req, res) {
  res.send('<h2>Lista!</h2>');
});

app.get(/prod/, function(req, res) {
  res.send('<h2>With prod!</h2>');
});

app.listen(3000, () => console.log('Running...'));
