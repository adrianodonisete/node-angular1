const express = require('express');
const app = express();
const router = require('./ex05_routes');

app.use('/api', router);

app.listen(3000, () => console.log('Executando...'));
