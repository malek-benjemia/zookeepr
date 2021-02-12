const express = require('express');

const app = express(); //initiate server

const { animals } = require('./data/animals');

app.get('/api/animals', (req, res) => {
    res.send('Hello!');
  });

//chain the listen method to Express.js server in order to listen to incoming requests
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });