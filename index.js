const express = require('express');
const axios = require('axios');

const app = express();

app.get('/achievement', async (req, res) => {
  try {
    const data = 'BackEnd What?';
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/greet', async (req, res) => {
  try {
    const data = 'Hello From StackTrek';
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
