const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

router.post('/submit', (req, res) => {
  const inputData = req.body.inputData;
  console.log('Received data:', inputData);
  res.send('Data received successfully.');
});

module.exports = router;
